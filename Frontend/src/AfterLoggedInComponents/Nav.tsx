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
        <div className=" w-full h-15 flex justify-center items-center gap-x-5 md:gap-x-105 lg:gap-x-170 xl:gap-x-230 2xl:gap-x-350">
          <div className="flex justify-center items-center gap-2 text-xl ">
            <img src={Logo} alt="logo" className="w-8" />
            <h1 className="text-white font-bold">
              <div className="flex">
                <Link
                  to="/"
                  className=" text-2xl md:text-3xl lg:text-4xl font-bold   text-[#3b82f6]"
                >
                  Flow <span className="text-green-500">Track</span>
                </Link>
              </div>
            </h1>
          </div>

          {/* This is the mobile menu */}
          <div
            className=" w-7 h-5 relative -left-4 cursor-pointer z-40 md:hidden"
            // onClick={() => setmenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <button className="text-[#000000] font-bold text-[13px] border border-2 border-green-500 text-green-500 w-30 h-7 rounded-xl hover:-translate-y-1 duration-300 hover:border-none hover:bg-transparent cursor-pointer">
            Logged Out
          </button>
        </div>
        <div className="w-3xl h-xl flex justify-start items-center gap-x-2 bg-amber-800 py-1 px-2">
          {" "}
          <div className=" flex items-center gap-x-8">
            <Link
              to="/"
              className={` md:text-xl  text-green-500 cursor-pointer hover:text-green-400 `}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={` md:text-xl  text-green-500 cursor-pointer hover:text-green-400 `}
            >
              Services
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
