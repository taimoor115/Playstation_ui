import Button from "./Button";

interface Props {
  title: string | undefined;
  description: string | undefined;
  price: string | undefined;
}

const ItemPropterties = ({ title, description, price }: Props) => {
  return (
    <>
      <div className="text-center text-2xl lg:text-start text-sky-600 font-thin ">
        {title}
      </div>
      <p className="text-[13px] lg:text-sm text-gray-600">{description}</p>
      <div className="flex gap-x-3 justify-center lg:justify-start">
        <Button
          className="ms-2 px-2 py-1 text-sm font-bold text-white bg-[#0064B7] mt-4 border border-transparent hover:border-white outline-none hover:outline-[#0064B7] border-double rounded-full"
          text="Find out more"
        />
        <Button
          className="px-2 py-1 text-sm font-bold text-white bg-[#BF392D] mt-4 border border-transparent hover:border-white outline-none hover:outline-[#BF392D] border-double rounded-full"
          text="But now"
        />
      </div>
      <div className="hidden lg:block text-lg text-black">
        Buy from <b>${price}</b>
      </div>
    </>
  );
};

export default ItemPropterties;
