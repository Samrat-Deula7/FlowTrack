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
    const url = "http://localhost:3000/api/tasks/GetAllTasks";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
      if (result.dataSet && Array.isArray(result.dataSet)) {
        return result.dataSet as Data[];
      }

      return [];
    } catch (error: any) {
      alert(error.message);
      return [];
    }
  };
  return (
    <FlowtrackContext.Provider value={{ getAllTask }}>
      {children}
    </FlowtrackContext.Provider>
  );
};

export default FlowtrackState;
