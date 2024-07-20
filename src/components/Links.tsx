import { links } from "../constants";

const Links = () => {
  return (
    <div className="h-[50vh] mt-24 flex items-center lg:mt-32 bg-[#F5F7FA]">
      <div className="space-y-10 flex flex-col md-4 justify-center items-center">
        <div className="px-4 text-3xl lg:text-4xl font-serif ms-4 lg:ms-0 flex justify-center">
          Follow us on Social Media
        </div>
        <div className="lg:flex w-[270px] lg:w-full flex flex-wrap items-center justify-center">
          {links.map((link) => (
            <img
              key={link.id}
              src={`./src/assets/images/${link.url}.webp `}
              className=" lg:w-[10%] lg:h-[10%] md:w-[10%] md:h-[10%] w-[35%] h-[30%]"
              alt="links"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
