import Carousel from "./components/Listings";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ShowGames from "./components/ShowGames";
import MainSection from "./components/MainSection";
import HeroSection from "./components/HeroSection";
import Store from "./components/Store";
import News from "./components/News";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Advertisment from "./components/Advertisment";

const App = () => {
  return (
    <>
      <div className="">
        <div className="bg-black h-9 hidden lg:flex md:flex justify-end">
          <p className="text-white text-xl text-end me-2 ">Sony</p>
        </div>
        <Navbar />
        <MainSection />
        <Slider />
        <Carousel />
        <ShowGames />
        <HeroSection />
        <Store />
        <News />
        <Links />
        <Advertisment />
        <Footer />
      </div>
    </>
  );
};

export default App;
