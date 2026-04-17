import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

import sql, { Bit } from "mssql";

import jwt from "jsonwebtoken";
import authenticateuser from "../middleware/authenticateuser";

const router = express.Router();

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

// Sign Up API
router.post(
  "/SignUpUser",
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

      const salt = await bcrypt.genSalt(10);
      let EncriptedPassword = await bcrypt.hash(Password, salt);
      let EncriptedPhoneno = await bcrypt.hash(Phoneno, salt);

      const emails: any = await pool
        .request()
        .input("email", sql.VarChar(30), Email)
        .query("SELECT 1 FROM User_Table WHERE Email = @email");
      if (emails.recordset.length > 0) {
        res.status(400).json({
          error: "User already exists!",
        });
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
        res.status(200).send({ success:"User Created successfully" });
      }
    } catch (err) {
      console.error(err);
        res.status(400).json({
          error: "Some error occurred in the database",
        });
    }
  },
);

// Login API
router.post(
  "/LoginUser",
  [body("Email", "Enter a valid email").isEmail()],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      // If error is empty is false then there is error so the if statement cathes the error.
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { Email, Password } = req.body;

      const pool = await sql.connect(config);

      let id = await pool
        .request()
        .input("email", sql.VarChar(30), Email)
        .query("select User_Id from User_Table WHERE Email = @email");

      if (id.recordset.length > 0) {
        const userId = id.recordset[0].User_Id;

        let DBpassword: any = await pool
          .request()
          .input("userId", sql.Int, userId)
          .query("select Password from User_Table WHERE User_Id = @userId");

        const passwordCompare = await bcrypt.compare(
          Password,
          DBpassword.recordset[0].Password,
        );

        if (passwordCompare) {
          // The following code generates an authentication token which is provided to the user
          const data = {
            user: {
              id: userId,
            },
          };
          // This gives the user the authtoken using which the token can be transformed back into the user.id .And because of the secret helps to detect if the token has been Tampered(changed)

          const authtoken = jwt.sign(data, process.env.JWT_SECRET!);
          res.status(200).send({ FlowTrackAuthtoken: authtoken });
        } else {
          return res.status(400).json({
            error: "Please try to login with correct credentials",
          });
        }
      } else {
        return res.status(400).json({
          error: "No user found with that email",
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: "Some error occurred in the database",
      });
    }
  },
);

// CreateTask API
router.post(
  "/CreateTask",
  authenticateuser,
  async (req: Request, res: Response) => {
    try {
      const pool = await sql.connect(config);
      let { Task,Completed } = req.body;
      if(Completed == undefined){ Completed=0}
      const payload = req.user as { user: { id: string } };
      const id = parseInt(payload.user.id);
      // Insert query with bound parameters
      await pool
        .request()
        .input("Userid", sql.Int, id)
        .input("task", sql.VarChar(80), Task)
        .input("completed", sql.Bit, Completed).query(`
        INSERT INTO User_Tasks VALUES (@Userid, @task,@completed)
      `);
      res.status(200).send({success:"Task has been saved !"});
    } catch (err) {
      console.error(err);
      res.status(500).send("Some error occurred");
    }
  },
);

// GetAllTasks API
router.get("/GetAllTasks", async (req: Request, res: Response) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool.request().query("SELECT * FROM User_Tasks");
    return res.json({dataSet:data.recordset});
  } catch (err) {
    console.error(err);
    res.status(500).send("Some error occurred");
  }
});

export default router;
