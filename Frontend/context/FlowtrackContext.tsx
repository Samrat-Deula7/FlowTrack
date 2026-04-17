import { createContext } from "react";

type Data = {
  Task_Id: number;
  User_Id: number;
  Task: string;
  Completed: boolean;
};

type FlowtrackContextType = {
  getAllTask: () => Promise<Data[]>;
};
const FlowtrackContext = createContext<FlowtrackContextType >({
  // Needed to put async here because the function getAllTask return and Promise
  getAllTask: async() => [],
});

export default FlowtrackContext;
