import Carousel from "./components/Listings";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ShowGames from "./components/ShowGames";

const App = () => {
  return (
    <>
      <div className="bg-black h-9 hidden lg:flex md:flex justify-end">
        <p className="text-white text-xl text-end me-2 ">Sony</p>
      </div>
      <Navbar />
      <HeroSection />
      <Slider />
      <Carousel />
      <ShowGames />
    </>
  );
};

export default App;
