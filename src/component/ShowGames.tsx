import { useState } from "react";
import { games } from "../constants";
import { Button, Cards } from "../component";

const ShowGames = () => {
  const [toggle, setToggle] = useState("new");

  const filterGames = games.filter((game) => game.genre === toggle);

  return (
    <div className="bg-[#121314] h-[80vh] lg:h-[110vh] text-black mt-28 lg:mt-40 ">
      <div className="flex justify-center  p-2">
        <div className="text-3xl text-center lg:text-4xl text-white font-thin my-10">
          Great PS4 & PS5 games out now or coming soon
        </div>
      </div>
      <div className="flex sticky top-20 z-40 justify-center">
        <div className="join bg-[#191A1D] rounded-full w-52 flex justify-center">
          <Button
            text="New Release"
            className={`px-4 py-2 rounded-full text-xs ${
              toggle == "new"
                ? " bg-white text-black"
                : "bg-[#191A1D] text-white hover:text-blue-500 hover:shadow-md hover:shadow-black"
            }`}
            onClick={() => setToggle("new")}
          />
          <Button
            text="Coming Soon"
            className={`px-4 py-2 rounded-full text-xs ${
              toggle == "soon"
                ? " bg-white text-black"
                : "bg-[#191A1D] text-white hover:text-blue-500 hover:shadow-md hover:shadow-black"
            }`}
            onClick={() => setToggle("soon")}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3  place-items-center ">
        {filterGames.map((game, index) => (
          <Cards key={index} url={game.url} title={game.title} />
        ))}
      </div>
    </div>
  );
};

export default ShowGames;
