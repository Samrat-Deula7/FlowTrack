import Nav from "./Nav";
import { useState } from "react";
import Search from "../assets/search.png";

export default function Collaboration() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
        {/* Left Panel - Search Section */}
        <div className="flex flex-col justify-start items-center w-full md:w-[35%] lg:w-[30%] h-auto md:h-[500px] lg:h-[600px] bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10 p-4 sm:p-6">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full shadow-lg px-3 sm:px-4 py-2 w-full mt-2">
            <img
              src={Search}
              alt="search"
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
            />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base min-w-0"
            />
            <button
              onClick={handleSearch}
              className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-5 lg:px-6 py-2 rounded-full ml-2 transition-colors cursor-pointer text-xs sm:text-sm lg:text-base whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Panel - Content Section - Hidden on mobile and tablet, visible on laptop+ */}
        <div className="hidden md:block w-full md:w-[60%] lg:w-[65%] h-auto md:h-[500px] lg:h-[600px] bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
      </div>
    </>
  );
}
