import { IoReorderThreeOutline } from "react-icons/io5";
import { navLinks } from "../constants";

const Drawer = () => {
  return (
    <div className="drawer block lg:hidden md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer">
          <IoReorderThreeOutline className="text-5xl text-black font-extrabold" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="text-black p-3 hover:bg-slate-300" key={index}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
