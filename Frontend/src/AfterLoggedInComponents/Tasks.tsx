import { useState } from "react";
import Nav from "./Nav";
import Add from "../assets/add.png";
import Tick from "../assets/check-mark.png";
import Delete from "../assets/trash.png";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "This is an example of task #1", completed: true },
    { id: 2, text: "This is an example of task #2", completed: false },
    { id: 3, text: "This is an example of task #3", completed: true },
    { id: 4, text: "This is an example of task #4", completed: false },
    { id: 5, text: "This is an example of task #5", completed: false },
  ]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = (): void => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-[95rem] mx-auto">
          {/* Tasks Section */}
          <div className="w-full lg:flex-1 lg:max-w-3xl xl:max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-white mb-6 sm:mb-8 font-semibold">
              Your Tasks
            </h1>

            {/* Add Task Input */}
            <div className="flex gap-2 sm:gap-3 mb-5 sm:mb-6">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add new task"
                className="flex-1 px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-sm sm:text-base md:text-lg text-gray-500 placeholder-gray-400 border-b-2 border-gray-300 focus:border-gray-400 focus:outline-none bg-transparent transition-colors"
              />
              <button
                onClick={addTask}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 shadow-md hover:shadow-lg"
              >
                <img
                  src={Add}
                  alt="add"
                  className="bg-white rounded-full w-full h-full p-1.5 sm:p-2"
                />
              </button>
            </div>

            {/* Task List */}
            <div className="space-y-3 sm:space-y-4 max-h-[calc(100vh-20rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-2 border-gray-400 rounded flex items-center justify-center hover:bg-gray-50 hover:border-gray-500 transition-all duration-200"
                  >
                    {task.completed && (
                      <img
                        src={Tick}
                        alt="tick"
                        className="bg-white rounded-full w-full h-full p-0.5"
                      />
                    )}
                  </button>

                  <span
                    className={`flex-1 text-sm sm:text-base md:text-lg break-words leading-relaxed ${
                      task.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {task.text}
                  </span>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    <img
                      src={Delete}
                      alt="delete"
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
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
}
