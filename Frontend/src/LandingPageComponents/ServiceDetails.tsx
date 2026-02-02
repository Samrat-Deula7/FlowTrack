const ServiceDetails = () => {
  const handleTabClick = (targetClass: string) => {
    const allTabs = document.querySelectorAll(".tab-content");
    allTabs.forEach((tab) => tab.classList.remove("scalefull"));

    document.querySelector(`.${targetClass}`)?.classList.add("scalefull");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-7xl bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl border border-white/20 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Buttons Section */}
        <div className="flex lg:flex-col justify-center items-center w-full lg:w-auto gap-2 sm:gap-3 md:gap-4 lg:gap-6 bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-3 sm:p-4 md:p-5 lg:p-6">
          <button
            className="bg-white/10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full border border-transparent hover:border-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 w-full lg:w-40 h-10 sm:h-12 md:h-14 lg:h-16 cursor-pointer active:scale-95"
            onClick={() => handleTabClick("list")}
          >
            List
          </button>
          <button
            className="bg-white/10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full border border-transparent hover:border-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 w-full lg:w-40 h-10 sm:h-12 md:h-14 lg:h-16 cursor-pointer active:scale-95"
            onClick={() => handleTabClick("meeting")}
          >
            Meeting
          </button>
          <button
            className="bg-white/10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full border border-transparent hover:border-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 w-full lg:w-40 h-10 sm:h-12 md:h-14 lg:h-16 cursor-pointer active:scale-95"
            onClick={() => handleTabClick("graph")}
          >
            Graph
          </button>
          <button
            className="bg-white/10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full border border-transparent hover:border-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 w-full lg:w-40 h-10 sm:h-12 md:h-14 lg:h-16 cursor-pointer active:scale-95"
            onClick={() => handleTabClick("history")}
          >
            History
          </button>
          <button
            className="bg-white/10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold backdrop-blur-md shadow-lg rounded-full border border-transparent hover:border-white/20 hover:bg-green-500 hover:text-white transition-all duration-300 w-full lg:w-40 h-10 sm:h-12 md:h-14 lg:h-16 cursor-pointer active:scale-95"
            onClick={() => handleTabClick("progress")}
          >
            Progress
          </button>
        </div>

        {/* Content Section */}
        <div className="relative w-full lg:flex-1 h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-white/10 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl duration-300 scalenone list tab-content z-50 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            List
          </div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl duration-300 scalenone meeting tab-content z-40 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Meeting
          </div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl duration-300 scalenone graph tab-content z-30 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Graph
          </div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl duration-300 scalenone history tab-content z-20 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            History
          </div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl duration-300 scalenone progress tab-content z-10 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Progress
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
