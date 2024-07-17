interface Props {
  url: string;
  title: string;
}

const Cards = ({ url, title }: Props) => {
  return (
    <div className="card w-24 h-28 mt-4 rounded-none lg:w-60 lg:h-52 shadow-xl transition translate-y-2 ease-out hover:translate-y-1">
      <img
        src={`./src/assets/images/${url}.webp`}
        alt="Shoes"
        className="rounded-md h-full object-center object-cover"
      />
      <p className=" text-gray-400 text-xs">{title}</p>
    </div>
  );
};

export default Cards;
