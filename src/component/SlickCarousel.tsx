import Slider from "react-slick";
import { gamesCard } from "../constants";

function SlickCarousel() {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    arrows: false,

    dots: false,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-full">
      <Slider {...settings} className="flex lg:ml-7 px-8 lg:container lg:p-10">
        {gamesCard.map((game) => (
          <div
            key={game.id}
            className="grid grid-cols-1 lg:grid-cols-3 justify-stretch card card-compact shadow-xl lg:max-h-[90% ] lg:max-w-[95%] md:max-w-[95%]   overflow-hidden"
          >
            <figure className="hover:shadow-md hover:shadow-gray-600">
              <img src={`/images/${game.url}.webp`} alt={game.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title lg:text-md font-thin  line-clamp-2">
                {game.title}
              </h2>
              <p className="text-gray-600 lg:line-clamp-4">
                {game.description}
              </p>
              <div className="flex justify-start items-center gap-x-2 lg:mt-8">
                <img
                  src={`/images/${game.image}.webp`}
                  alt={game.title}
                  className="rounded w-[15%] h-[40%]"
                />
                <div className="flex flex-col text-xs ">
                  <p>{game.made}</p>
                  <p>{game.company}</p>
                  <p>{game.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickCarousel;
