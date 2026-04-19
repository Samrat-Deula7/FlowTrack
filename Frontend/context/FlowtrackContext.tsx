import { createContext } from "react";

type Data = {
  Task_Id: number;
  User_Id: number;
  Task: string;
  Completed: boolean;
};

type FlowtrackContextType = {
  getAllTask: () => Promise<Data[]>;
  UpdateCompletedState: (
    Task_id: number,
    Completed: boolean,
  ) => Promise<object>;
  DeleteTask: (Task_id: number) => void;
};
const FlowtrackContext = createContext<FlowtrackContextType>({
  // Needed to put async here because the function getAllTask return and Promise
  getAllTask: async () => [],
  UpdateCompletedState: async () => ({}),
  DeleteTask: () => {},
});

export default FlowtrackContext;
