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
};
const FlowtrackContext = createContext<FlowtrackContextType>({
  // Needed to put async here because the function getAllTask return and Promise
  getAllTask: async () => [],
  UpdateCompletedState: async () => ({}),
  UpdateTeamTableCompleteState: async () => ({}),
  DeleteTask: () => {},
  GetTeamData: async () => [],
  GetTeamTasks: async () => [],
});

export default FlowtrackContext;

