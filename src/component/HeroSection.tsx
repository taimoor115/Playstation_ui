import { gamesCards } from "../constants";

import { IoGameControllerOutline } from "react-icons/io5";
import { Button, Cards, FullWidthSlider } from "../component";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col justify-center gap-y-2 mt-10  items-center absolute w-full">
          <span className="font-bold flex lg:items-center lg:gap-x-2 text-3xl">
            <IoGameControllerOutline className="text-yellow-400 text-5xl font-extrabold" />
            Playstation.Plus
          </span>
          <p className="font-thin lg:text-4xl">Discover PlayStation Plus</p>
          <p className="text-sm text-gray-500 px-2">
            Play hundreds of incredible PS5, PS4 and classic PlayStation games,
            and discover epic adventures, unique indies, family favourites, and
            everything in between.
          </p>
        </div>

        <img src="/images/BG1.webp" className="h-[75vh] lg:h-[100vh]" />

        <div className="absolute inset-0 top-52 lg:top-44 ">
          <FullWidthSlider />
        </div>
        <div className="absolute bottom-7 left-[26%] lg:bottom-3  flex lg:left-[45%] ">
          <Button
            className=" px-5 py-1 font-bold text-xs lg:text-sm text-white bg-[#0064B7] mt-4 border border-transparent hover:border-[#0064B7] outline-none hover:outline-[#0064B7] border-double rounded-full"
            text="Discover Playstation Plus"
          />
        </div>
      </div>
      <div className="h-[470px] bg-black  lg:h-[120vh] lg:bg-transparent relative">
        <img
          src="/images/BG2.webp"
          alt="image"
          className="h-[50%] lg:h-full w-full shadow-2xl shadow-gray-600  "
        />
        <div className="absolute text-center lg:text-start top-[42%] flex flex-col gap-4 lg:gap-2 lg:absolute lg:top-[40%] lg:left-[15%]">
          <p className="text-3xl lg:text-4xl text-white lg:font-thin">
            Feel a New Real
          </p>
          <p className="lg:w-[450px] text-white lg:font-thin">
            Immerse yourself in epic worlds that go beyond reality,with the
            groundbreaking Playstation VR2 headset and Playstation VR2 Sense
            Controller
          </p>
          <p className="text-white lg:font-thin">
            Buy from <b>$549,99</b>
          </p>
          <div className="flex justify-center lg:justify-start gap-x-3">
            <Button
              className=" px-2 py-1 text-sm font-bold text-black bg-[white] mt-4 border border-transparent hover:border-white outline-none hover:outline-[white] border-double rounded-full"
              text="Find out more"
            />
            <Button
              className="px-2 py-1 text-sm font-bold text-white bg-[#BF392D] mt-4 border border-transparent hover:border-white outline-none hover:outline-[#BF392D] border-double rounded-full"
              text="But now"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#27254F] h-[124vh] relative">
        <img
          src="/images/BG3.webp"
          alt="image"
          className="w-full object-cover h-[40%] lg:h-[50%] left-0 object-right"
        />
        <div className="flex lg:absolute lg:top-2 lg:left-[15%] gap-y-4 mt-16  flex-col justify-end text-white p-5 ">
          <p className="text-[40px] leading-10 font-thin">
            This July <span className="block">ON Playstation</span>
          </p>
          <p className="text-sm text-[#ABAAAD] lg:w-[80%]">
            Check out this month's biggest releases along with dedicated
            features, guides and more
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              className="px-2 py-1  text-sm font-bold text-black bg-[white] mt-4 border border-transparent hover:border-white outline-none hover:outline-[white] border-double rounded-full"
              text="Find out more"
            />
          </div>
        </div>
        <div className=" grid grid-cols-3 place-items-center w-full ">
          {gamesCards.map((game, index) => (
            <Cards key={index} url={game.url} title={game.title} />
          ))}
        </div>
        <div className="flex justify-center mt-3 lg:mt-16">
          <Button
            className="px-2 py-1 text-sm font-bold text-black bg-[white] mt-4 border border-transparent hover:border-white outline-none hover:outline-[white] border-double rounded-full"
            text="Find out more"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
