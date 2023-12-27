import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[20%] flex items-center justify-between p-3 rounded-md ">
        <input
          className="w-full p-3 rounded-l-lg outline-none  bg-zinc-100 shadow-sm"
          type="text"
          placeholder="Search Here!"
        />
        <a
          href="#"
          className="h-full p-4 bg-orange-500 rounded-r-lg text-white shadow-sm hover:bg-orange-600 transition-all"
        >
          <FaSearch />
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
