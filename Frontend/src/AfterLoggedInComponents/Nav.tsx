import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? " backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className=" w-full h-15 flex justify-between items-center px-3">
          <div className="flex justify-center items-center  gap-2 text-xl ">
            <img src={Logo} alt="logo" className="w-7" />
            <h1 className="text-white font-bold">
              <div className="flex">
                <Link to="/">
                  Flow<span className="text-green-500">Track</span>
                </Link>
              </div>
            </h1>
          </div>

          <button className="text-[#000000] font-bold text-[13px] border border-2 border-green-500 text-green-500 w-30 h-7 rounded-xl hover:-translate-y-1 duration-300 hover:border-none hover:bg-transparent cursor-pointer">
            Logged Out
          </button>
          {/* This is the mobile menu */}
          <div
            className=" w-7 h-5 relative -left-4 cursor-pointer z-40 text-white md:hidden"
            // onClick={() => setmenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
        </div>
        <div className="hidden md:flex w-3xl h-xl  justify-start items-center gap-x-2 py-1 px-2">
          {" "}
          <div className=" flex items-center gap-x-5 px-3 ">
            <Link
              to="/tasks"
              className={` md:text-110  text-gray-400 cursor-pointer hover:text-green-500 hover:font-mono`}
            >
              Tasks
            </Link>
            <Link
              to="/collaboration"
              className={` md:text-110  text-gray-400 cursor-pointer hover:text-green-500 hover:font-mono`}
            >
              Collaboration
            </Link>
            <Link
              to="/visualization"
              className={` md:text-110  text-gray-400 cursor-pointer hover:text-green-500 hover:font-mono`}
            >
              Visualization
            </Link>
            <Link
              to="/timeline"
              className={` md:text-110 text-gray-400 cursor-pointer hover:text-green-500 hover:font-mono`}
            >
              Timeline
            </Link>
            <Link
              to="/iteration"
              className={` md:text-110  text-gray-400 cursor-pointer hover:text-green-500 hover:font-mono`}
            >
              Iteration
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
