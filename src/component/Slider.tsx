import { useState } from "react";
import { sliderImages } from "../constants";

const Slider = () => {
  const [isSelected, setIsSelected] = useState(-1);

  return (
    <div className="h-32 flex justify-center">
      <div className=" h-full w-[80%] flex items-center justify-center gap-4 overflow-x-scroll px-5">
        {sliderImages.map((url, index) => (
          <img
            key={index}
            src={`/images/${url}.webp`}
            alt="images-slider"
            onClick={() => setIsSelected(index)}
            className={`object-cover h-[75%] items-center justify-center lg:w-[15%] lg:h-[65%] md:w-[30%] md:h-[65%] rounded-lg  border-2 border-transparent transition  translate-y-3 ease-in delay-150 hover:translate-y-0 hover:opacity-100  hover:scale-100 hover:shadow-lg hover:shadow-gray-500 duration-100 ${
              isSelected === index && "border-blue-600 "
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
