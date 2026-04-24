import FlowtrackContext from "./FlowtrackContext";

export type Data = {
  Task_Id: number;
  User_Id: number;
  Task: string;
  Completed: boolean;
};

export type TeamData = {
  Name: string;
  Team_Id: number;
  User_Id: number;
  Team_Name: string;
  Team_Tasks: string;
  Completed: boolean;
  Team_code: string;
};
const FlowtrackState: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Following are the API of Tasks route

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

  const UpdateCompletedState = async (
    Task_id: number,
    Completed: boolean,
  ): Promise<object> => {
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
      const result: object = await response.json();
      return result;
    } catch (error: any) {
      alert(error.message);
      return {};
    }
  };

  const DeleteTask = async (Task_id: number) => {
    const FlowTrackAuthtoken = localStorage.getItem("FlowTrackToken");
    const url = "http://localhost:3000/api/tasks/DeleteTask";
    try {
      const response = fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          FlowTrackAuthtoken: FlowTrackAuthtoken || "",
        },
        body: JSON.stringify({ Task_Id: Task_id }),
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  // Following are the API of TeamTasks route

  const GetTeamData = async () => {
    const FlowTrackAuthtoken = localStorage.getItem("FlowTrackToken");
    const url = "http://localhost:3000/api/teamtasks/GetTeamData";
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
        return result.dataSet as TeamData[];
      }

      return [];
    } catch (error: any) {
      alert(error.message);
      return [];
    }
  };

  return (
    <FlowtrackContext.Provider
      value={{ getAllTask, UpdateCompletedState, DeleteTask, GetTeamData }}
    >
      {children}
    </FlowtrackContext.Provider>
  );
};

export default FlowtrackState;
