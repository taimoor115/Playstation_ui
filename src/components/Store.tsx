import Button from "./Button";

const Store = () => {
  return (
    <div className="lg:flex items-center lg:h-[83vh] px-5 mt-4 lg:mt-0 lg:p-0">
      <div className="lg:h-[80%] w-full lg:flex justify-center">
        <div className=" lg:flex justify-center h-full lg:w-[70%]">
          <div className="lg:flex items-center h-full lg:w-[30%]">
            <div className="flex lg:hidden h-full lg:w-[70%]  items-center ">
              <img
                src="./src/assets/images/T1.webp"
                alt=""
                className="rounded-md transition ease-in "
              />
            </div>
            <div className="h-[90%] lg:py-10">
              <p className="text-black text-3xl">
                <b>Playstation </b> Store
              </p>
              <p className="font-thin text-3xl lg:text-[30px] ">
                New savings on Playstation Store
              </p>
              <p className="text-sm text-gray-500">
                Explore the latest discounts and seasonal sales on great games
                and add-ons for PS5 and PS4
              </p>
              <Button
                className="px-2 py-1 text-sm font-bold text-white bg-[#e24638] mt-4 border border-transparent hover:border-[#e24638] lg:*:ms-1 outline-none hover:outline-[#e24638] border-double rounded-full"
                text="Find out more"
              />
            </div>
          </div>
          <div className="hidden lg:flex h-full w-[70%]  items-center ">
            <img
              src="./src/assets/images/T1.webp"
              alt=""
              className="rounded-md transition ease-in "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
