function HeroSection() {
  const animation = "duration-500 ease-in-out hover:z-10 hover:-translate-3";

  function focus(e: React.MouseEvent<HTMLDivElement>): void {
    const clickedDiv = e.currentTarget;

    console.log(clickedDiv);
    clickedDiv.classList.add("focus");
    clickedDiv.classList.add("z-100");
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      clickedDiv.classList.remove("focus");
      clickedDiv.classList.remove("z-100");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    }, 2000);
  }

  return (
    <>
      <div className=" mt-52 hidden xl:flex flex-col  w-full h-screen ">
        <h1 className="text-green-500 relative top-10 font-bold text-4xl md:text-6xl text-center ">
          Our <span className="text-white font-normal">Services</span>
        </h1>

        <div className="w-screen h-screen flex justify-center items-start bg-transparent">
          <div className="absolute w-5xl h-[10px] bg-transparent">
            <div
              onClick={focus}
              className={`relative   xl:top-25 xl:left-55 w-80 h-80 bg-amber-200 rounded-full   ${animation}  hover:w-90 hover:h-90 cursor-pointer`}
            ></div>
            <div
              onClick={focus}
              className={`relative xl:top-0 xl:left-50 w-65 h-65  bg-red-600 rounded-3xl  ${animation}   hover:w-75 hover:h-75 cursor-pointer`}
            ></div>
            <div
              onClick={focus}
              className={`relative xl:-top-60  xl:left-160 w-60 h-60  bg-green-400 rounded-full ${animation}  hover:w-70 hover:h-70 cursor-pointer`}
            ></div>
            <div
              onClick={focus}
              className={`relative xl:-top-190 xl:left-120 w-80 h-80  bg-blue-400 rounded-4xl ${animation}   hover:w-90 hover:h-90 cursor-pointer`}
            ></div>
            <div
              onClick={focus}
              className={`relative  xl:-top-195 xl:left-100 w-85 h-65  bg-purple-900 rounded-full  ${animation} hover:w-95 hover:h-75 cursor-pointer`}
            ></div>

         
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
