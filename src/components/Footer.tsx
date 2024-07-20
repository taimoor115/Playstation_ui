import { FaArrowCircleRight, FaPlaystation } from "react-icons/fa";
import { footerItems } from "../constants";
import { FaEarthAfrica } from "react-icons/fa6";
import FooterProperties from "./FooterProperties";

const Footer = () => {
  return (
    <div className="lg:h-[90vh] bg-[#094B9C]">
      <div className=" h-full mx-10 flex flex-col gap-y-3">
        <div className="flex gap-x-3  text-bold p-4">
          <FaPlaystation className="text-white text-5xl" />
          <p className="text-4xl mt-1 text-white font-extrabold">Playstation</p>
        </div>
        <hr className="text-gray-500" />
        <div className="lg:flex lg:justify-between text-white lg:h-[35%] lg:items-center">
          {footerItems?.map((item) => (
            <FooterProperties key={item.id} item={item} />
          ))}
        </div>
        <hr className="text-gray-800" />
        <div className="flex text-white justify-between">
          <div className=" space-y-5">
            <div className="flex w-[220px] gap-x-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3XWMXOTUilV8tarRFvQHdsdJAE5K98Hfqo7qjQEvSWim39AQ"
                alt="image"
                className="h-20 w-20"
              />
              <p className="text-lg font-bold font-serif">
                Sony Interactive Entertainment
              </p>
            </div>
            <div>
              <p className="text-xs">
                © 2024 Sony Interactive Entertainment LLC
                <p className="text-xs mb-4">
                  All content, games titles, trade names and/or trade dress,
                  trademarks, artwork and associated imagery are trademarks
                  and/or copyright material of their respective owners. All
                  rights reserved. More info
                </p>
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://www.playstation.com/content/dam/global_pdc/en/external-resources/age-ratings/esrb/esrb.svg?$1600px--t$"
              alt="image"
              className="h-20 w-20"
            />
          </div>
        </div>

        <hr className="text-gray-800" />

        <div className="flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between px-5 text-sm">
          <div className="flex items-center text-white text-md gap-x-1">
            <FaEarthAfrica />
            <span>United State</span> <FaArrowCircleRight />
          </div>
          <div className="text-white">
            Legal | Privacy Policy| Website |Site map | Personal Information
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
