import express, { Request, Response } from "express";
import sql from "mssql";

const router = express.Router();

const config = {
  user: "Flow_Track",
  password: "1111",
  server: "DESKTOP-DVSO359",
  database: "Project_Flow_Track",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 1433,
};

router.get("/createtasks", async (req: Request, res: Response) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool.request().query("SELECT * FROM tasks");
    return res.json(data.recordset); // ✅ return the rows array
  } catch (err) {
    console.error(err);
    res.status(500).send("Some error occurred");
  }
});

export default router;
