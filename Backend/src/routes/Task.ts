import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sql from "mssql";

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
