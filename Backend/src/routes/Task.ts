import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import sql from "mssql";

// const JWT_SECRET = process.env.JWT_SECRET;

// import jwt from "jsonwebtoken"

const router = express.Router();
dotenv.config();
const config = {
  user: process.env.Database_User,
  password: process.env.Database_User_Pass,
  server: "DESKTOP-DVSO359",
  database: process.env.Database,
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 1433,
};

router.post(
  "/loginUser",
  [
    body(
      "Name",
      "Name should have at least 3 characters and maximun of 20 character",
    ).isLength({ min: 3, max: 20 }),
    body(
      "Password",
      "Password must be atleast 5 characters and maximun of 20 character",
    ).isLength({
      min: 5,
      max: 20,
    }),
    body("Email", "Enter a valid email").isEmail(),
    body("Phoneno", "Phoneno must be at least have 10 numbers").isLength({
      min: 10,
    }),
  ],
  async (req: Request, res: Response) => {
    // The above array will set the restrictions rules and the following code will give error if those rules are broken.
    const errors = validationResult(req);
    // If error is empty is false then there is error so the if statement cathes the error.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const pool = await sql.connect(config);

      const { Name, Password, Email, Phoneno } = req.body;

      const salt= await bcrypt.genSalt(10);
      let EncriptedPassword = await bcrypt.hash(Password,salt);
      let EncriptedPhoneno = await bcrypt.hash(Phoneno,salt);

      const emails: any = await pool
        .request()
        .input("email", sql.VarChar(30), Email)
        .query("SELECT 1 FROM User_Table WHERE Email = @email");
      if (emails.recordset.length > 0) {
        res.status(400).send("User already exists!");
      } else {
        // Insert query with bound parameters
        await pool
          .request()
          .input("name", sql.VarChar(20), Name)
          .input("password", sql.VarChar(80), EncriptedPassword)
          .input("email", sql.VarChar(30), Email)
          .input("phoneno", sql.VarChar(80), EncriptedPhoneno).query(`
        INSERT INTO User_Table VALUES (@name, @password, @email, @phoneno)
      `);

        res.status(200).send("User registered successfully!");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Some error occurred in the database");
    }
  },
);

router.get("/GetAllTasks", async (req: Request, res: Response) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool.request().query("SELECT * FROM User_Task");
    return res.json(data.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Some error occurred");
  }
});

  // The following code are to be used after the user is logged in

  // let id = await pool
  //   .request()
  //   .input("email", sql.VarChar(30), Email)
  //   .query("select User_Id from User_Table WHERE Email = @email");
  // if (id.recordset.length > 0) {
  //   const userId = id.recordset[0].User_Id;
  //   console.log("User_Id:", userId);
  //   // The following code generates an authentication token which is provided to the user
  //   const data = {
  //     contractor: {
  //       id: userId,
  //     },
  //   };
  //   // This gives the user the authtoken using which the token can be transformed back into the user.id .And because of the secret helps to detect if the token has been Tampered(changed)
  //   const authtoken = jwt.sign(data, process.env.JWT_SECRET!);
  //   res.status(200).send({ authtoken: authtoken });
  // } else {
  //   console.log("No user found with that email");
  // }


export default router;
