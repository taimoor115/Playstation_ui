import {
  Advertisment,
  Footer,
  HeroSection,
  Links,
  Listings,
  MainSection,
  Navbar,
  News,
  ShowGames,
  Slider,
  Store,
} from "./component";

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
        <Listings />
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
