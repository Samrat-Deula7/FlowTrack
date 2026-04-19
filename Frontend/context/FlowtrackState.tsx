import FlowtrackContext from "./FlowtrackContext";

type Data = {
  Task_Id: number;
  User_Id: number;
  Task: string;
  Completed: boolean;
};
const FlowtrackState: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getAllTask = async (): Promise<Data[]> => {
    const FlowTrackAuthtoken = localStorage.getItem("FlowTrackToken");
    const url = "http://localhost:3000/api/tasks/GetAllTasks";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          FlowTrackAuthtoken: FlowTrackAuthtoken || "",
        },
      });
      const result = await response.json();
      if (result.dataSet && Array.isArray(result.dataSet)) {
        return result.dataSet as Data[];
      }

      return [];
    } catch (error: any) {
      alert(error.message);
      return [];
    }
  };

   const UpdateCompletedState= async (Task_id:number,Completed:boolean):Promise<object>=>{
     const FlowTrackAuthtoken = localStorage.getItem("FlowTrackToken");
    const url = "http://localhost:3000/api/tasks/UpdateCompleteState";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          FlowTrackAuthtoken: FlowTrackAuthtoken || "",
        },
        body: JSON.stringify({ Task_Id: Task_id, Completed: Completed }),
      });
      const result:object= await response.json();
      return result;
    } catch (error: any) {
      alert(error.message);
    }
    }
  
  return (
    <FlowtrackContext.Provider value={{ getAllTask,UpdateCompletedState }}>
      {children}
    </FlowtrackContext.Provider>
  );
};

export default FlowtrackState;
