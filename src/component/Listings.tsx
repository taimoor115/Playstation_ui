import { useState } from "react";
import { accessories } from "../constants";
import { Carousel, ItemProperties } from "../component";

const Listings = () => {
  const [selectedId, setSelectedId] = useState(1);

  const onHandleClick = (id: number) => {
    setSelectedId(id);
  };

  const filterAccessories = accessories.find((item) => item.id === selectedId);
  console.log(filterAccessories);

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.67fr] lg:mt-10 ps-3 lg:p-5">
        <div className=" flex flex-col items-center justify-center lg:p-3">
          <div className="text-4xl px-5 my-11 text-center lg:text-5xl lg:my-0 lg:px-0 lg:text-start text-black font-thin">
            Introduction the PS5 console and accessories
          </div>
          <div className="hidden sm:block lg:block lg:mt-3 w-full space-y-2">
            <ItemProperties
              title={filterAccessories?.title}
              description={filterAccessories?.description}
              price={filterAccessories?.price}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={`/images/${filterAccessories?.url}.webp`}
            alt="img"
            className="lg:p-4"
          />
        </div>
      </div>
      <div className="lg:mt-4">
        <Carousel onHandleClick={onHandleClick} />
      </div>
      <div className="p-5">
        <div className="lg:hidden">
          <img src={`/images/${filterAccessories?.url}.webp`} alt="" />
        </div>
        <div className="lg:hidden">
          <ItemProperties
            title={filterAccessories?.title}
            description={filterAccessories?.description}
            price={filterAccessories?.price}
          />
        </div>
      </div>
    </div>
  );
};

export default Listings;
