type Project = {
  title: string;
  description: string;
  image: string;
  links: {
    web?: string;
    figma?: string;
  };
};

export const projectsData: Project[] = [
  {
    title: `Miss Universe PH 2021`,
    description: `Explore a dynamic marketing website designed for purchasing tickets to access exclusive live digital experiences. Immerse yourself in captivating virtual events with ease and convenience.`,
    image: `/images/projects/miss-universe-ph-2021.webp`,
    links: {
      web: ``,
      figma: ``,
    },
  },
  {
    title: `BitLink`,
    description: `lorem ipsum`,
    image: `/images/projects/bitlink.webp`,
    links: {
      web: ``,
      figma: `https://www.figma.com/file/FfphriutK9eo33WAOS5ACd/Bitlink?type=design&node-id=0%3A1&mode=design&t=iDjXgbzctWGUGZZE-1`,
    },
  },
  {
    title: `coffee:life`,
    description: `lorem ipsum`,
    image: `/images/projects/coffee-life.webp`,
    links: {
      web: `https://www.coffeelife.ph/`,
      figma: `https://www.figma.com/file/LVf08ixx7AReDOX75YESSD/Coffee-Life-Website?type=design&node-id=0-1&mode=design&t=TXNaSrMf7ad9T7ha-0`,
    },
  },
  {
    title: `Alaga`,
    description: `A subscription box service that delivers monthly surprises for your furry friends! Each box is filled with high-quality toys, treats, and goodies curated specifically for dogs and cats.`,
    image: `/images/projects/alaga.webp`,
    links: {
      web: `https://www.alaga.ph/`,
      figma: `https://www.figma.com/file/LVf08ixx7AReDOX75YESSD/Coffee-Life-Website?type=design&node-id=0-1&mode=design&t=TXNaSrMf7ad9T7ha-0`,
    },
  },
  {
    title: `Yogorino`,
    description: `A e-commerce where customers can easily browse and order their favorite dessert online, providing a seamless and convenient dining experience.`,
    image: `/images/projects/yogorino.webp`,
    links: {
      web: ``,
      figma: `https://www.figma.com/file/ZSznyPbEnfHsuGMFLyeTzJ/yogorino?type=design&node-id=0-1&mode=design&t=KHyt8XKW2vRJzfeo-0`,
    },
  },
  {
    title: `CopperMask`,
    description: `A sleek online hub to buy premium masks effortlessly. Browse, select, and purchase with ease. Welcome to our streamlined mask marketplace.`,
    image: `/images/projects/coppermask.webp`,
    links: {
      web: ``,
      figma: `https://www.figma.com/file/GuksEJW3TDCPgpnbf4gz6N/CopperMask-Website-Revamp?type=design&node-id=0-1&mode=design`,
    },
  },
];
