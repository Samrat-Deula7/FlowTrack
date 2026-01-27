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
      <div className=" mt-52  w-full h-screen ">
        <div className="relative md:top-10 md:left-45 lg:top-0 lg:left-80 xl:-top-30 xl:-left-80 2xl:-top-10 2xl:-left-5 w-1 h-1">
          <div
            onClick={focus}
            className={`absolute top-20 left-60 xl:top-35 xl:left-150 w-35 h-35 xl:w-100 xl:h-100 bg-amber-200 rounded-full   ${animation}  hover:w-120 hover:h-120 cursor-pointer`}
          ></div>
          <div
            onClick={focus}
            className={`absolute top-75 left-15 xl:top-105 xl:left-130 w-30 h-30 xl:w-80 xl:h-80 bg-red-600 rounded-3xl ${animation}   hover:w-100 hover:h-100 cursor-pointer`}
          ></div>
          <div
            onClick={focus}
            className={`absolute top-90 left-50 xl:top-95  xl:left-290 w-27.5 h-27.5 xl:w-70 xl:h-70 bg-green-400 rounded-full ${animation}  hover:w-90 hover:h-90 cursor-pointer`}
          ></div>
          <div
            onClick={focus}
            className={`absolute top-30 left-15 xl:top-35 xl:left-230 w-32.5 h-32.5 xl:w-90 xl:h-90 bg-blue-400 rounded-4xl ${animation}   hover:w-110 hover:h-110 cursor-pointer`}
          ></div>
          <div
            onClick={focus}
            className={`absolute top-55 left-50  xl:top-105 xl:left-200 w-35 h-32.5 xl:w-120 xl:h-90 bg-purple-900 rounded-full  ${animation} hover:w-140 hover:h-110 cursor-pointer`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
