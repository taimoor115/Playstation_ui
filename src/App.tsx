import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const App = () => {
  return (
    <>
      <div className="bg-black h-9 hidden lg:flex md:flex justify-end">
        <p className="text-white text-xl text-end me-2 ">Sony</p>
      </div>
      <Navbar />
      <div>
        <HeroSection />
      </div>
      <Slider />
    </>
  );
};

export default App;
