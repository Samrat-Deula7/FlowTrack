function HeroSection() {
  return (
    <>
      <div className=" mt-52  w-full h-screen ">
        <div className="relative md:top-10 md:left-45 lg:top-0 lg:left-80 xl:-top-30 xl:-left-80 2xl:-top-10 2xl:-left-5 w-1 h-1">
          <div className="absolute top-20 left-60 xl:top-35 xl:left-150 w-35 h-35 xl:w-100 xl:h-100 bg-amber-200 rounded-full z-6   duration-500 ease-in-out hover:z-100 hover:-translate-3 hover:w-120 hover:h-120 cursor-pointer">
            shape 1
          </div>
          <div className="absolute top-75 left-15 xl:top-105 xl:left-130 w-30 h-30 xl:w-80 xl:h-80 bg-red-600 rounded-3xl rotate-45 z-3  duration-500 ease-in-out hover:z-100 hover:-translate-3 hover:w-100 hover:h-100 cursor-pointer">
            shape 2
          </div>
          <div className="absolute top-90 left-50 xl:top-95  xl:left-290 w-27.5 h-27.5 xl:w-70 xl:h-70 bg-green-400 rounded-full z-5  duration-500 ease-in-out hover:z-100 hover:-translate-3 hover:w-90 hover:h-90 cursor-pointer">
            shape 3
          </div>
          <div className="absolute top-30 left-15 xl:top-35 xl:left-230 w-32.5 h-32.5 xl:w-90 xl:h-90 bg-blue-400 rounded-4xl z-6  duration-500 ease-in-out hover:z-100 hover:-translate-3 hover:w-110 hover:h-110 cursor-pointer">
            shape 4
          </div>
          <div className="absolute top-55 left-50  xl:top-105 xl:left-200 w-32.5 h-32.5 xl:w-90 xl:h-90 bg-purple-900 rounded-4xl rotate-30 z-4  duration-500 ease-in-out hover:z-100 hover:-translate-3 hover:w-100 hover:h-100 cursor-pointer">
            shape 5
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
