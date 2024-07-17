interface Props {
  url: string;
  title: string;
}

const Cards = ({ url, title }: Props) => {
  return (
    <div className="card w-24 h-28 mt-9 rounded-none lg:w-60 lg:h-52 shadow-xl transition translate-y-2 ease-out hover:translate-y-1">
      <figure className="flex flex-col">
        <img
          src={`./src/assets/images/${url}.webp`}
          alt="Shoes"
          className="rounded-md"
        />
        <p className=" text-gray-400 text-xs">{title}</p>
      </figure>
    </div>
  );
};

export default Cards;
