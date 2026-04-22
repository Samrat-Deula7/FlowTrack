import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import sql from "mssql";
import { config } from "./Task";
import authenticateuser from "../middleware/authenticateuser";

const router = express.Router();

router.post(
  "/createTeam",
  authenticateuser,
  [
    body(
      "Team_Name",
      "Name should have at least 3 characters and maximun of 70 character",
    ).isLength({ min: 3, max: 70 }),
    body(
      "Team_Tasks",
      "Task should be atleast 10 characters and maximum of 150 character",
    ),
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
      let { Team_Name, Team_Tasks, Completed } = req.body;
      if (Completed == undefined) {
        Completed = 0;
      }
      const payload = req.user as { user: { id: string } };
      const id = parseInt(payload.user.id);

      const genCode = () => {
        let Team_code: number[] = [];
        const count = 4,
          min = 1,
          max = 100;
        while (Team_code.length < count) {
          const random_code = Math.floor(Math.random() * (max - min + 1)) + min;
          Team_code.push(random_code);
        }
        return Team_code;
      };
      let Team_code = JSON.stringify(genCode());

      const TeamName: any = await pool
        .request()
        .input("Team_Name", sql.NVarChar(sql.MAX), Team_Name)
        .query("SELECT 1 FROM Team_Table WHERE Team_Name = @Team_Name");

      const code: any = await pool
        .request()
        .input("Team_code", sql.NVarChar(sql.MAX), Team_code)
        .query("SELECT 1 FROM Team_Table WHERE Team_code = @Team_code");
      if (code.recordset.length > 0) {
        Team_code = JSON.stringify(genCode());
      } else if (TeamName.recordset.length > 0) {
        res.status(400).json({
          error: "Team name already exists! please pick another name",
        });
      } else {
        // Insert query with bound parameters
        await pool
          .request()
          .input("User_Id", sql.Int, id)
          .input("Team_Name", sql.VarChar(70), Team_Name)
          .input("Team_Tasks", sql.VarChar(150), Team_Tasks)
          .input("Completed", sql.Bit, Completed)
          .input("Team_code", sql.NVarChar(sql.MAX), Team_code).query(`
              INSERT INTO Team_Table VALUES (@User_Id, @Team_Name, @Team_Tasks, @Completed,@Team_code)
            `);
        res
          .status(200)
          .send([{ success: "Team Has been created !" }, { Code: Team_code }]);
      }
    } catch (error) {
      console.error(error);
    }
  },
);

router.get(
  "/GetTeamData",
  authenticateuser,
  async (req: Request, res: Response) => {
    try {
      
      const payload = req.user as { user: { id: string } };
      const id = parseInt(payload.user.id);
      const pool = await sql.connect(config);
      const TeamData = await pool
        .request()
        .input("userId", sql.Int, id)
        .query("Select * from Team_Table where User_Id=@userId");
      res.status(200).send(TeamData.recordset)
    } catch (error) {
      console.error(error);
    }
  },
);



export default router;
