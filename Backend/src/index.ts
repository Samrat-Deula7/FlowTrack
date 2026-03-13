import express, { Application, Request, Response } from "express";
import tasksRouter from "./Task";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
