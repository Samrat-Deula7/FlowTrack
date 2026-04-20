import React, { useState, useContext, useEffect } from "react";
import Add from "../assets/add.png";
import Tick from "../assets/check-mark.png";
import Delete from "../assets/trash.png";
import FlowTrackContext from "../../context/FlowtrackContext";
import Alert, { type AlertType } from "../Alert";

type Data = {
  Task_Id: number;
  User_Id: number;
  Task: string;
  Completed: boolean;
};
type TasksProps = {
  setAlertPopUp: React.Dispatch<React.SetStateAction<AlertType>>;
  AlertPopUp: AlertType;
};
const Tasks: React.FC<TasksProps> = ({ setAlertPopUp, AlertPopUp }) => {
  let TaskInInput = false;
  const [Task, setTask] = useState({ task: "", completed: false });
  const [AllTasks, setAllTasks] = useState<Data[]>([]);
  const { getAllTask, UpdateCompletedState, DeleteTask } =
    useContext(FlowTrackContext);

  const getTasks = async () => {
    const dataSet: Data[] = await getAllTask();
    setAllTasks(dataSet);
  };

  const UpdateState = (id: any, completed: any) => {
    completed = !completed;
    UpdateCompletedState(id, completed);
    getTasks();
  };

  const HandleDelete = (id: any) => {
    DeleteTask(id);
    setAlertPopUp({
      ...AlertPopUp,
      alert: true,
      type: "success",
      msg: "Task deleted successfully",
    });

    setTimeout(() => {
      getTasks();
      setAlertPopUp({ ...AlertPopUp, alert: false });
    }, 2000);
  };
  useEffect(() => {
    getTasks();
  }, [Task]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...Task, [e.target.name]: e.target.value });
  };

  const addTask = async () => {
    const FlowTrackAuthtoken = localStorage.getItem("FlowTrackToken");
    const url = "http://localhost:3000/api/tasks/CreateTask";
    if (Task.task != "") TaskInInput = true;
    if (TaskInInput) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            FlowTrackAuthtoken: FlowTrackAuthtoken || "",
          },
          body: JSON.stringify({
            Task: Task.task,
            Completed: Task.completed,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setTask({ task: "", completed: false });

          setAlertPopUp({
            ...AlertPopUp,
            alert: true,
            type: "success",
            msg: result.success,
          });

          setTimeout(() => {
            getTasks();
            setAlertPopUp({ ...AlertPopUp, alert: false,type: "success",
            msg: result.success, });
          }, 2000);
        }
      } catch (error: any) {
        setAlertPopUp({
          ...AlertPopUp,
          alert: true,
          type: "failure",
          msg: error.message,
        });

        setTimeout(() => {
          setAlertPopUp({ ...AlertPopUp, alert: false });
        }, 2000);
      }
    } else {
      setAlertPopUp({
        ...AlertPopUp,
        alert: true,
        type: "failure",
        msg: "Enter a task before adding it",
      });

      setTimeout(() => {
        setAlertPopUp({ ...AlertPopUp, alert: false });
      }, 2000);
    }
  };

  return (
    <>
      <div className="min-h-auto  w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10  pt-4  ">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-[95rem] mx-auto">
          {/* Tasks Section */}
          <div className="w-full lg:flex-1 lg:max-w-3xl xl:max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-white mb-6 sm:mb-8 font-semibold">
              Your Tasks
            </h1>

            {/* Add Task Input */}
            <div className="flex gap-2 sm:gap-3 mb-5 sm:mb-6">
              <input
                id="TaskInput"
                type="text"
                value={Task.task}
                name="task"
                onChange={onChange}
                // onKeyPress={handleKeyPress}
                placeholder="Add new task"
                className="flex-1 px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-sm sm:text-base md:text-lg text-gray-500 placeholder-gray-400 border-b-2 border-gray-300 focus:border-gray-400 focus:outline-none bg-transparent transition-colors"
              />
              <button
                onClick={addTask}
                className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 shadow-md hover:shadow-lg${TaskInInput ? "" : "cursor-not-allowed"}`}
              >
                <img
                  src={Add}
                  alt="add"
                  className="bg-white rounded-full w-full h-full p-1.5 sm:p-2 "
                />
              </button>
            </div>

            {/* Task List */}
            <div className="space-y-3 sm:space-y-4 max-h-[calc(100vh-20rem)] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent overflow-y-scroll">
              {AllTasks.map((Task: Data) => (
                <div
                  key={Task.Task_Id}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200"
                >
                  <button
                    onClick={() => UpdateState(Task.Task_Id, Task.Completed)}
                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-2  cursor-pointer border-gray-400 rounded flex items-center justify-center hover:bg-gray-50 hover:border-gray-500 transition-all duration-200"
                  >
                    {Task.Completed && (
                      <img
                        src={Tick}
                        alt="tick"
                        className="bg-white rounded-full w-full h-full p-0.5 cursor-pointer"
                      />
                    )}
                  </button>
                  <span
                    className={`flex-1 text-sm sm:text-base md:text-lg break-words leading-relaxed ${
                      Task.Completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {Task.Task}
                  </span>

                  <button
                    onClick={() => HandleDelete(Task.Task_Id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors duration-200  cursor-pointer"
                  >
                    <img
                      src={Delete}
                      alt="delete"
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7  cursor-pointer"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className="w-full lg:w-96 xl:w-[28rem] 2xl:w-[32rem] min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[36rem] bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10 p-4 sm:p-6">
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
