interface Item {
  id: number;
  title: string;
  children: { id: number; content: string }[];
}
interface Props {
  item: Item;
}

const FooterProperties = ({ item }: Props) => {
  return (
    <div
      key={item?.id}
      className="lg:w-[20%] xs:collapse collapse-plus lg:collapse-open md:collapse-open  lg:h-[80%] md:w-[20%] md:h-[80%]"
    >
      <input
        type="radio"
        className="lg:hidden md:hidden xl:hidden"
        name="my-accordion-4"
        defaultChecked
      />
      <p className="font-bold lg:mb-4 xs:collapse-title lg:ms-4 md:ms-4">
        {item?.title}
      </p>
      <ul className="lg:space-y-1 lg:flex lg:flex-col lg:justify-start collapse-content lg:collapse-open">
        {item?.children?.map((child) => (
          <li className="text-xs" key={child?.id}>
            {child?.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterProperties;
