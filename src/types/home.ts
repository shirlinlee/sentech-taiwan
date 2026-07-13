export type HeroSectionData = {
  badge: string;
  link: string;
  videoSrc: string;
  videoPoster?: string;
};

export type ProductSlideData = {
  id: string;
  label: string;
  name: string;
  description: string;
  href: string;
  productImage: {
    src: string;
    alt: string;
  };
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type HomePageData = {
  hero: HeroSectionData;
  products: ProductSlideData[];
};
