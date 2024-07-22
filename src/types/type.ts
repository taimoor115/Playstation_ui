export interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}
export interface CardProps {
  url: string;
  title: string;
}

export interface CarouselProps {
  onHandleClick: (id: number) => void;
}

interface Item {
  id: number;
  title: string;
  children: { id: number; content: string }[];
}
export interface FooterPropertiesProps {
  item: Item;
}

export interface ItemPropertiesProps {
  title: string | undefined;
  description: string | undefined;
  price: string | undefined;
}
