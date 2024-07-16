import { FaPlaystation } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import Drawer from "./Drawer";
import { useState } from "react";
import SearchBar from "./Search";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex items-center bg-white h-16 sticky top-0 z-50 ">
      <div className="flex items-center  text-black text-sm">
        <div className="flex items-center lg:hidden md:hidden">
          <Drawer />
          <CiSearch
            onClick={() => document.getElementById("my_modal_2")?.showModal()}
            className="text-3xl text-black font-extrabold text-start"
          />
          <dialog id="my_modal_2" className="modal modal-top">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Search...</h3>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-4 w-[300px]"
                />
                <div className="h-12 w-12 text-center">
                  <CiSearch className="text-4xl text-center text-black  font-extrabold" />
                </div>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <p className="ms-7 me-3">
          <FaPlaystation className="text-4xl ms-16 lg:ms-0 md:ms-0 lg:text-5xl md:text-5xl  text-sky-600" />
        </p>
        <div className="hidden items-center gap-2 lg:flex md:flex">
          {navLinks.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-end flex-1 lg:me-4 md:me-4 gap-4">
        <div>
          <Button
            className="bg-sky-700 rounded-full ps-4 pe-4 text-white text-lg"
            text="Sign in"
          />
        </div>
        <div className="relative">
          <CiSearch
            onClick={() => setIsVisible(!isVisible)}
            className="text-2xl text-black font-extrabold hidden lg:flex md:flex"
          />
          {isVisible && <SearchBar />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
