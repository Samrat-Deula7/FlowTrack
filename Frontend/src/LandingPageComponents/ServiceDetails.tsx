
const ServiceDetails = () => {
      const handleTabClick = (targetClass: string) => {
        const allTabs = document.querySelectorAll(".tab-content");
        allTabs.forEach((tab) => tab.classList.remove("scalefull"));

        document.querySelector(`.${targetClass}`)?.classList.add("scalefull");
      };
  return (
    <div className="h-200 xl:w-screen xl:h-screen  flex justify-center items-center bg-transparent py-20 px-6 mb-3">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 w-300 h-180 bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10">
        <div className="flex xl:flex-col justify-center items-center w-90 h-20 xl:w-80 xl:h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl gap-1 xl:gap-6">
          <button
            className=" bg-white/5 xl:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white w-30 h-6 xl:w-35 xl:h-15 cursor-pointer"
            onClick={() => handleTabClick("list")}
          >
            List
          </button>
          <button
            className=" bg-white/5 xl:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white w-30 h-6 xl:w-35 xl:h-15  cursor-pointer"
            onClick={() => handleTabClick("meeting")}
          >
            Meeting
          </button>
          <button
            className=" bg-white/5 xl:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white  w-30 h-6 xl:w-35 xl:h-15  cursor-pointer"
            onClick={() => handleTabClick("graph")}
          >
            Graph
          </button>
          <button
            className=" bg-white/5 xl:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white  w-30 h-6 xl:w-35 xl:h-15  cursor-pointer"
            onClick={() => handleTabClick("history")}
          >
            History
          </button>
          <button
            className=" bg-white/5 xl:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white  w-30 h-6 xl:w-35 xl:h-15  cursor-pointer"
            onClick={() => handleTabClick("progress")}
          >
            Progress
          </button>
        </div>
        <div className="relative w-90 h-60 xl:w-200 xl:h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl   ">
          <div className="absolute inset-0  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone list  tab-content z-5">
            list
          </div>
          <div className="absolute inset-0  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  meeting tab-content z-4">
            metting
          </div>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  graph tab-content z-3">
            graph
          </div>
          <div className="absolute inset-0  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  history tab-content z-2">
            history
          </div>
          <div className="absolute inset-0  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  progress tab-content z-1">
            progress
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
