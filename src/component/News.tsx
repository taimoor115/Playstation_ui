import SlickCarousel from "./SlickCarousel";
const News = () => {
  return (
    <div className="lg:h-[100vh] flex flex-col mt-24 lg:mt-5 ">
      <div className="text-center text-4xl mb-24 lg:text-4xl my-9 lg:my-8 ">
        The latest news from Playstation Blog
      </div>
      <div className="lg:h-[85%]">{<SlickCarousel />}</div>
    </div>
  );
};

export default News;
