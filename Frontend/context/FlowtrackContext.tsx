import { createContext } from "react";
import { type Data, type TeamData, type TeamTasks } from "./FlowtrackState";

type FlowtrackContextType = {
  getAllTask: () => Promise<Data[]>;
  UpdateCompletedState: (
    Task_id: number,
    Completed: boolean,
  ) => Promise<object>;
  UpdateTeamTableCompleteState: (
    Task_id: number,
    Completed: boolean,
  ) => Promise<object>;
  DeleteTask: (Task_id: number) => void;
  GetTeamData: () => Promise<TeamData[]>;
  GetTeamTasks: (Task_code: string) => Promise<TeamTasks[]>;
  addTeamTask:(TeamTask:object)=>string;
};
const FlowtrackContext = createContext<FlowtrackContextType>({
  // Needed to put async here because the function getAllTask return and Promise
  getAllTask: async () => [], // This means that the function returns some data
  UpdateCompletedState: async () => ({}),
  UpdateTeamTableCompleteState: async () => ({}),
  DeleteTask: () => {}, // This means that the function returns void
  GetTeamData: async () => [],
  GetTeamTasks: async () => [],
  addTeamTask: () => "Team Task saved !",
});

export default FlowtrackContext;

