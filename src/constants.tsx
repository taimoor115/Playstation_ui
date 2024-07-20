import { IoGameController } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa6";
import { MdGamepad } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { Children } from "react";

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
// const arr = [
//   { id: 1, label: "Hme", path: "/", icon: <FaShow />, Children: {} },
// ];

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

export const games = [
  {
    title: "Stellar Blade",
    url: "G1",
    genre: "new",
  },
  {
    title: "Call of Duty: Modern Walfare III",
    url: "G6",
    genre: "new",
  },
  {
    title: "Marvel's Spider-Man 2",
    url: "G2",
    genre: "new",
  },
  {
    title: "Death Strading 2",
    url: "G5",
    genre: "soon",
  },
  {
    title: "Elder Ring Shadow of the Erdtree",
    url: "G3",
    genre: "soon",
  },
  {
    title: "Silent Hill 4",
    url: "G4",
    genre: "soon",
  },
  {
    title: "Assassin's Creed Shadows",
    url: "G7",
    genre: "soon",
  },
  {
    title: "The Last of us part II Remastered",
    url: "G8",
    genre: "soon",
  },
  {
    title: "LEGO Fortnite",
    url: "G9",
    genre: "soon",
  },
  {
    title: "God of War Ragnarok",
    url: "G10",
    genre: "new",
  },
  {
    title: "Rise of the Ronin",
    url: "G11",
    genre: "new",
  },
  {
    title: "Star Wars™ Outlaws",
    url: "G12",
    genre: "new",
  },
];

export const gamesSlider = [
  {
    id: 1,
    url: "WC1",
    badge: "Premium",
    title: "Playstation Plus Premium",
    description:
      "Enjoy, all the Playstation Plus Benefits from the Extra and Essential plans, plus exclusive benefits like game trial, cloud streaming,and the Classic Catalogue",
  },
  {
    id: 2,
    url: "WC3",
    badge: "Extra",
    title: "Playstation Plus Extra",
    description:
      "Download and play hundred of PS4, PS5 games from the Game Catalog, on top of all benefits from Playstation Plus Essential",
  },
  {
    id: 3,
    url: "WC2",
    badge: "Essential",
    title: "Playstation Plus Essential",
    description:
      "New games to play each month, online multiplayer exclusive PS Store discounts and more, available with all three Playstation Plus membership plans",
  },
];

export const gamesCards = [
  {
    url: "DC1",
    title: "Latest updates",
    description:
      "Keep up to date with the month's biggest new events, including XDEFIENT Season one.",
  },
  {
    url: "DC2",
    title: "Playstation indies",
    description:
      "Enjoy, all the Playstation Plus Benefits from the Extra and Essential plans, plus exclusive benefits like game trial, cloud streaming,and the Classic Catalogue.",
  },
  {
    url: "DC3",
    title: "New Release",
    description:
      "New games to play each month, online multiplayer exclusive PS Store discounts and more, available.",
  },
];

export const gamesCard = [
  {
    id: 1,
    title:
      "Evo 2024: Get to know the fighting games headlining the tournaments",
    description:
      "The eve of Evo, the world's biggest celebration of fighting games,is almost upon us. This massive event in Las Vegas Will host over10,000 participants in 2024, making it officially the biggest espor...",
    url: "DC1",
    image: "D1",
    made: "CEO, 1047 Games",
    company: "lan Proulx",
    date: "Jul 18, 2024",
  },
  {
    id: 2,
    title: "Splitgate 2 portals over to PS5 and PS4 in 2025",
    description:
      "In the summer of 2021, when we released Splitgate on PS4, we didn't know what to expect. We certainly weren't ready for themillions of people who hopped online wanting to play our take o...",
    url: "DC2",
    image: "D2",
    made: "CEO, 1047 Games",
    company: "lan Proulx",
    date: "Jul 18, 2024",
  },
  {
    id: 3,
    title:
      "Neverness to Everness gameplay showcases supernatural urban open-world RPG, comingto PS5",
    description:
      "Hello everyone, I'm Kee Zhang from Hotta Studio. I'm incredibly excited to introduce our brand new title, Neverness to Everness, to PlayStation players today! Neverness to Everness (NTE for short) i....",
    url: "DC3",
    image: "D3",
    made: "CEO, 1047 Games",
    company: "lan Proulx",
    date: "Jul 18, 2024",
  },
];

export const links = [
  { id: 1, url: "Link1" },
  { id: 2, url: "Link2" },
  { id: 3, url: "Link3" },
  { id: 4, url: "Link4" },
];
