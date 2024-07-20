import Button from "./Button";
import "animate.css";

const MainSection = () => {
  return (
    <div>
      <img
        src="./src/assets/images/header.webp"
        className="h-[65vh] lg:h-[83vh] md:h-[83vh] object-cover relative"
        alt="header"
      />
      <div className=" absolute  top-[66%] left-16 lg:top-36 lg:left-56 md:left-56 text-white transform -translate-y-full lg:translate-y-0 md:translate-y-0 transition-transform duration-500 delay-300">
        <p className="text-[70px] lg:text-[80px] md:text-[80px] font-extrabold text-center lg:text-start md:text-start">
          <span className="text-red-600">2k</span>25
        </p>
        <p className="text-gray-200 text-[18px] mb-3 lg:mb-0 md:lg-0 lg:text-[35px] md:text-[35px]">
          Play anywhere, win <span className="lg:block">everywhere</span>
        </p>
        <p className="text-md text-gray-200 lg:text-lg md:text-lg mt-3 mb-4">
          Stack wins, raise banners, and make history in NBA 2k25.
          <span className="lg:block md:block">Coming soon to PS4 & PS5</span>
        </p>
        <div className="flex justify-center lg:justify-start md:justify-start">
          <Button
            className="px-5 py-1 font-bold text-black bg-white mt-4 border border-transparent hover:border-black outline-none hover:outline-white border-double rounded-full"
            text="Find out more"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
