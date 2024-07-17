import Button from "./Button";
import FullWidthSlider from "./FullWidthSlider";
import { IoGameControllerOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center gap-y-2 mt-1  items-center absolute w-full">
        <span className="font-bold flex lg:items-center lg:gap-x-2 text-3xl">
          <IoGameControllerOutline className="text-yellow-400 text-5xl font-extrabold" />
          Playstation.Plus
        </span>
        <p className="font-thin lg:text-4xl">Discover PlayStation Plus</p>
        <p className="text-sm text-gray-500">
          Play hundreds of incredible PS5, PS4 and classic PlayStation games,
          and discover epic adventures, unique indies, family favourites, and
          everything in between.
        </p>
      </div>
      <div className="">
        <img src="./src/assets/images/BG1.webp" />
      </div>
      <div className="absolute inset-0 top-36 ">
        <FullWidthSlider />
      </div>
      <div className="absolute lg:bottom-3 flex left-[45%] ">
        <Button
          className=" px-5 py-1 font-bold text-sm text-white bg-[#0064B7] mt-4 border border-transparent hover:border-[#0064B7] outline-none hover:outline-[#0064B7] border-double rounded-full"
          text="Discover Playstation Plus"
        />
      </div>
    </div>
  );
};

export default HeroSection;
