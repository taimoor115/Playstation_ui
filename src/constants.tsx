import { IoGameController } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa6";
import { MdGamepad } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

export const navLinks = [
  "Games",
  "PS5",
  "PS4",
  "Services",
  "Accessories",
  "News",
  "Store",
  "Support",
];

export const iconList = {
  games: IoGameController,
  ps5: FaGamepad,
  ps4: MdGamepad,
  services: FaServicestack,
  accessories: SiSmartthings,
  news: FaNewspaper,
  store: FaAppStore,
  support: MdContactSupport,
};
