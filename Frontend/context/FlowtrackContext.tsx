import { createContext } from "react";

type data = {
  Task_Id: number;
  User_Id: number;
  Task: string;
  Completed: string;
};

type FlowtrackContextType = {
  getAllTask: () => Promise<data[]>;
};
const FlowtrackContext = createContext<FlowtrackContextType>({
  // Needed to put async here because the function getAllTask return and Promise
  getAllTask: async() => [],
});

export default FlowtrackContext;
