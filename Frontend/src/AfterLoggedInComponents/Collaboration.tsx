import Nav from "./Nav";
import { useState } from "react";
import Search from "../assets/search.png"

export default function Collaboration() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center gap-x-4">
        <div className="flex flex-col justify-start items-center w-[30%] h-180 bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10 ">
          <div className="flex items-center bg-white rounded-full shadow-lg px-3 py-1 max-w-2xl w-[70%] mt-5">
            <img src={Search} alt="search" className="w-5 mr-2" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={handleSearch}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full ml-3 transition-colors cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
        <div className="hidden xl:block w-[60%] h-180 bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10 "></div>
      </div>
    </>
  );
}
