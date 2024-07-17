import Carousel from "./components/Listings";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ShowGames from "./components/ShowGames";
import MainSection from "./components/MainSection";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <div className="bg-black h-9 hidden lg:flex md:flex justify-end">
        <p className="text-white text-xl text-end me-2 ">Sony</p>
      </div>
      <Navbar />
      <MainSection />
      <Slider />
      <Carousel />
      <ShowGames />
      <HeroSection />
    </>
  );
};

export default App;
