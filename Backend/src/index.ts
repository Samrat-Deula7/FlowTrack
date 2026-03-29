import express, { Application, Request, Response } from "express";
import tasksRouter from "./routes/Task";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use(cors())
app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
