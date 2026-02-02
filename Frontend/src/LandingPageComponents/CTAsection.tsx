import { useEffect } from "react";
import Google from "../assets/google.png";

const CTASection = () => {
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const emailInput = document.getElementById("EmailInput");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, options);

    if (emailInput) {
      observer.observe(emailInput);
    }

    return () => {
      if (emailInput) {
        observer.unobserve(emailInput);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-slate-950 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-5xl w-full text-center space-y-6 sm:space-y-8 md:space-y-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2">
          Stay <span className="text-green-500">ahead</span> of your{" "}
          <span className="text-green-500">workflow</span>
        </h2>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
          Join thousands of professionals who trust FlowTrack to keep their
          projects organized and their teams aligned.
        </p>

        {/* Input and Button Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12 px-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 md:w-80 lg:w-96 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl text-gray-900 text-base sm:text-lg md:text-xl bg-white border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-lg hide"
            id="EmailInput"
          />

          {/* Google Sign-up Button */}
          <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 font-semibold text-base sm:text-lg md:text-xl text-black bg-white hover:bg-green-500 hover:text-white rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
            <img
              src={Google}
              alt="google icon"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="whitespace-nowrap">Sign up with Google</span>
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-6 sm:mt-8 px-4">
          Sign up to always be on top of your tasks
        </p>
      </div>
    </div>
  );
};

export default CTASection;
