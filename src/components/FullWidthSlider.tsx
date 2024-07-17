import { gamesSlider } from "../constants";

const FullWidthSlider = () => {
  return (
    <div className="carousel w-full">
      {gamesSlider.map((game) => (
        <div id={`${game.id}`} className="carousel-item relative w-full">
          <img
            src={`./src/assets/images/${game.url}.webp`}
            className="w-full relative h-[70%] opacity-100"
          />
          <div className="text-white absolute top-20 left-20 space-y-4">
            <p className="bg-[#FFE141] lg:w-40 text-black text-center font-bold">
              {game.badge}
            </p>
            <p className="text-2xl text-white font-extrabold">{game.title}</p>
            <p className="text-sm font-bold lg:w-[420px] text-gray-500">
              {game.description}
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between">
            <a href={`#${game.id + 1}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#${game.id - 1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullWidthSlider;
