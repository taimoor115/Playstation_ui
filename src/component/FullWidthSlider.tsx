import { gamesSlider } from "../constants";

const FullWidthSlider = () => {
  return (
    <div className="carousel w-full">
      {gamesSlider.map((game) => (
        <div
          key={game.id}
          id={`${game.id}`}
          className="carousel-item relative w-full"
        >
          <img
            src={`/images/${game.url}.webp`}
            className="object-cover  lg:object-none w-full h-[300px] lg:h-[60%] opacity-100"
          />
          <div className="text-white absolute  lg:h-[200px] top-16 left-14 lg:top-20 lg:left-20 space-y-4 ">
            <p className="bg-[#FFE141] w-16 text-sm lg:text-md lg:w-40 text-black text-center font-bold">
              {game.badge}
            </p>
            <p className="text-sm lg:text-2xl text-white font-extrabold ">
              {game.title}
            </p>
            <p className="text-xs lg:text-sm font-bold lg:w-[420px] text-gray-500">
              {game.description}
            </p>
          </div>
          <div className="absolute left-5 right-5 top-[50%] lg:top-[30%] flex -translate-y-1/2 transform justify-between">
            <a href={`#${game.id + 1}`} className="btn btn-circle btn-sm">
              ❮
            </a>
            <a href={`#${game.id - 1}`} className="btn btn-circle  btn-sm">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullWidthSlider;
