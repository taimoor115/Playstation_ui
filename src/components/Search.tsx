import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="absolute flex right-10 transition">
      <select name="platform" className="p-4 w-52 outline-none border bg-white">
        <option className="p-4s" value="playstore">
          www.Playstore.com
        </option>
        <option className="p-3" value="playstation">
          www.Playstation.com
        </option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        className="p-3 outline-none w-[400px] text-xl text-black"
      />

      <div className="p-4 bg-sky-500">
        <CiSearch className="text-xl text-white font-extrabold" />
      </div>
    </div>
  );
};

export default SearchBar;
