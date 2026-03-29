import express, { Request, Response } from "express";
import sql from "mssql";

const router = express.Router();

router.get("/createtasks",(req: Request, res: Response) => {
    res.send("Hi this the backend for task api");
  });

export default router;

