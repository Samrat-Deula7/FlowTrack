import { useState, useEffect } from "react";
import GearImg from "../assets/circle.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? " backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className=" w-full h-15 flex justify-center items-center gap-x-32 md:gap-x-44 lg:gap-x-56">
        <h3 className="text-[#08CB00] font-bold text-3xl md:text-4xl ">
          Flow <span>Track</span>
        </h3>

        <img src={GearImg} alt="gear" className="w-10 h-10 " />

        <button className="text-[#000000] font-bold bg-green-600 w-19 h-9 rounded-xl hover:-translate-y-1 duration-300 hover:text-green-500 hover:bg-transparent ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
