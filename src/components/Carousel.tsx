import { useState, useRef } from "react";
import { accessories } from "../constants";
import Button from "./Button";

interface Props {
  onHandleClick: (id: number) => void;
}

const Carousel = ({ onHandleClick }: Props) => {
  const [selected, setIsSelected] = useState(1);
  const carouselRef = useRef(null);

  console.log("CId", selected);

  const handleClick = (direction: string) => {
    const carouselWidth = carouselRef.current.offsetWidth;

    if (direction === "<") {
      // Move left (handle edge case)
      carouselRef.current.scrollLeft = Math.max(
        carouselRef.current.scrollLeft - carouselWidth,
        0
      );
      setIsSelected((prev) => prev - 1);
    } else if (direction === ">") {
      // Move right (handle edge case)
      carouselRef.current.scrollLeft = Math.min(
        carouselRef.current.scrollLeft + carouselWidth,
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      );
      setIsSelected((prev) => prev + 1);
    }
    onHandleClick(direction === "<" ? selected - 1 : selected + 1);
  };

  const handleItemClick = (id: number) => {
    setIsSelected(id);
    console.log("HID", selected);

    onHandleClick(id);
  };

  return (
    <div className="h-48 relative lg:p-5">
      <Button
        className="text-2xl absolute text-white px-3 py-1 lg:px-6 lg:py-2 rounded-full bg-[#0064B7] border border-transparent hover:border-white hover:outline-[#0064B7] top-16"
        text="<"
        onClick={() => handleClick("<")}
        disabled={selected === 1}
      />
      <div
        className="h-48 flex gap-x-3 overflow-x-auto no-scrollbar lg:p-3"
        ref={carouselRef}
      >
        {accessories.map((things) => (
          <div
            key={things.id}
            className={`flex-shrink-0 w-52 shadow-md shadow-gray-300 p-3 rounded`}
            onClick={() => handleItemClick(things.id)}
          >
            <div
              className={`lg;p-7 flex items-center justify-center rounded-md  ${
                things.id === selected ? "ring-2 ring-blue-400" : "ring-0"
              }`}
            >
              <img
                src={`./src/assets/images/${things.url}.webp`}
                alt="accessories-images"
                className="overflow-none rounded-md"
              />
            </div>
            <div
              className={`text-sm text-center ${
                selected === things.id ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {things.title}
            </div>
          </div>
        ))}
      </div>
      <Button
        className={`absolute text-2xl text-white px-3 py-1 lg:px-6 lg:py-2 rounded-full bg-[#0064B7] border border-transparent hover:border-white hover:outline-[#0064B7] right-0 bottom-16 `}
        text=">"
        onClick={() => handleClick(">")}
        disabled={selected === accessories.length}
      />
    </div>
  );
};

export default Carousel;
