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

export const sliderImages = ["c1", "c2", "c3", "c4", "c5", "c6"];

export const accessories = [
  {
    id: 1,
    title: "PlayStation 5 Console",
    url: "B1",
    description:
      "Experience an all-new generation of incredible PlayStation games.",
    price: "449,99",
  },
  {
    id: 2,
    title: "DualSense™ Wireless Controller",
    url: "B2",
    description:
      "Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.",
    price: "69,99",
  },

  {
    id: 3,
    title: "PULSE Elite™ Wireless Headset",
    url: "B3",
    description:
      "Enjoy lifelike gaming audio in a comfortable headset design equipped with a retractable microphone and built-in long-life battery",
    price: "149,99",
  },

  {
    id: 4,
    title: "PULSE Explore™ Wireless Earbuds",
    url: "B4",
    description:
      "Enjoy lifelike gaming audio wherever play takes you with a portable design equipped with hidden microphones and a companion charging case.",
    price: "199,99",
  },
  {
    id: 5,
    title: "DualSense Edge™ Wireless Controller",
    url: "B5",
    description:
      "Get an edge in gameplay with remappable buttons, tuneable triggers and sticks, changeable stick caps, back buttons, and more",
    price: "199,99",
  },
  {
    id: 6,
    title: "Access™ Controller",
    url: "B6",
    description:
      "A highly customisable PlayStation®5 controller kit designed to make gaming more accessible.",
    price: "89,99",
  },
  {
    id: 7,
    title: "PS5 Console Covers",
    url: "B7",
    description:
      "Personalise your PlayStation 5 or PlayStation 5 Digital Edition console with a vibrant array of new colour options.",
    price: "54,99",
  },
  {
    id: 8,
    title: "Media Remote",
    url: "B8",
    description:
      "Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.",
    price: "29,99",
  },
  {
    id: 9,
    title: "HD Camera",
    url: "B9",
    description:
      "Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture.",
    price: "59,99",
  },
];
