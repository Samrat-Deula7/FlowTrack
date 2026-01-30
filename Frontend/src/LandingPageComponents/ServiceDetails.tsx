
const ServiceDetails = () => {
      const handleTabClick = (targetClass: string) => {
        const allTabs = document.querySelectorAll(".tab-content");
        allTabs.forEach((tab) => tab.classList.remove("scalefull"));

        document.querySelector(`.${targetClass}`)?.classList.add("scalefull");
      };
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-transparent py-20 px-6 ">
      <div className="flex justify-center items-center gap-4 w-300 h-180 bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10">
        <div className="flex flex-col justify-center items-center w-80 h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl gap-6">
          <button
            className=" bg-white/5 backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white w-35 h-15 cursor-pointer"
            onClick={() => handleTabClick("list")}
          >
            list
          </button>
          <button
            className=" bg-white/5 backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white w-35 h-15 cursor-pointer"
            onClick={() => handleTabClick("metting")}
          >
            meeting
          </button>
          <button
            className=" bg-white/5 backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white w-35 h-15 cursor-pointer"
            onClick={() => handleTabClick("graph")}
          >
            graph
          </button>
          <button
            className=" bg-white/5 backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white w-35 h-15 cursor-pointer"
            onClick={() => handleTabClick("history")}
          >
            history
          </button>
          <button
            className=" bg-white/5 backdrop-blur-md shadow-lg rounded-full hover:border  hover:border-white/10 hover:bg-green-500 hover:text-white w-35 h-15 cursor-pointer"
            onClick={() => handleTabClick("progress")}
          >
            progress
          </button>
        </div>
        <div className="relative w-200 h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl   ">
          <div className="absolute inset-0 w-200 h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone list  tab-content z-5">
            list
          </div>
          <div className="absolute inset-0 w-200 h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  metting tab-content z-4">
            metting
          </div>
          <div className="absolute inset-0 w-200 h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  graph tab-content z-3">
            graph
          </div>
          <div className="absolute inset-0 w-200 h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  history tab-content z-2">
            history
          </div>
          <div className="absolute inset-0 w-200 h-160  bg-white/5 backdrop-blur-md shadow-lg rounded-xl  duration-300 scalenone  progress tab-content z-1">
            progress
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
