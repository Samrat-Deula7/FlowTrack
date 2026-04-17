
import FlowtrackContext from "./FlowtrackContext";


type data = {
  Task_Id: number;
  User_Id: number;
  Task: string;
  Completed: string;
};
const FlowtrackState: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  
  const getAllTask = async (): Promise<data[]> => {
    const url = "http://localhost:3000/api/tasks/GetAllTasks";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result.dataSet) {
        
      }
      return []
    } catch (error: any) {
      alert(error.message);
      return [];
    }
  };
  return (
    <FlowtrackContext.Provider value={{getAllTask}}>
      {children}
    </FlowtrackContext.Provider>
  );
};

export default FlowtrackState;