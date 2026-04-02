import express, { Request, Response } from "express";
import {body,validationResult} from "express-validator"
import bcrypt from "bcryptjs"
import dotenv from "dotenv";
import sql from "mssql";

const JWT_SECRET = process.env.JWT_SECRET;

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
      "name",
      "Name should have at least 3 characters and maximun of 20 character",
    ).isLength({ min: 3,max:20 }),
    body(
      "password",
      "Password must be atleast 5 characters and maximun of 20 character",
    ).isLength({
      min: 5,
      max:20
    }),
    body("email", "Enter a valid email").isEmail(),
    body("phoneno", "Phoneno must be at least have 10 numbers").isLength({
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
  },
);

router.get("/GetAllTasks", async (req: Request, res: Response) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool.request().query("SELECT * FROM tasks");
    return res.json(data.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Some error occurred");
  }
});

export default router;
