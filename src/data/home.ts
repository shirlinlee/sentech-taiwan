import { ROUTES } from "@/constants/routes";
import type { HomePageData } from "@/types/home";

export const homePageData: HomePageData = {
  hero: {
    badge: "View ALCOSCAN ALX3000",
    link: ROUTES.products.detail("alx3000"),
    videoSrc: "/videos/hero-compressed.mp4",
    videoPoster: "/images/home/hero-poster.png",
  },
  products: [
    {
      id: "alx3000",
      label: "產品",
      name: "ALCOSCAN ALX3000",
      description:
        "ALX3000 是一款使用燃料電池式酒精感測器的呼氣酒精測試儀，並搭載汽車點火連鎖裝置。安裝 ALX3000 後進入車內時，駕駛必須先進行酒精測試，並依分析結果控制點火。",
      href: ROUTES.products.detail("alx3000"),
      productImage: {
        src: "/images/home/products/sec2_img1.png",
        alt: "ALCOSCAN ALX3000",
      },
      backgroundImage: {
        src: "/images/home/products/sec2_bg1.jpg",
        alt: "",
      },
    },
    {
      id: "alp-1",
      label: "產品",
      name: "ALCOSCAN ALP-1",
      description:
        "採用燃料電池感測器技術，ALP-1 是一款高階升級版專業呼氣酒精測試儀，用於測量人體呼氣中的酒精。搭載燃料電池感測器技術，具備最佳精準度。測試結果可儲存在 ALP-1 中，也可透過無線連接的行動印表機列印。",
      href: ROUTES.products.detail("alp-1"),
      productImage: {
        src: "/images/home/products/sec2_img2.png",
        alt: "ALCOSCAN ALP-1",
      },
      backgroundImage: {
        src: "/images/home/products/sec2_bg2.jpg",
        alt: "",
      },
    },
    {
      id: "iblow10-pro",
      label: "產品",
      name: "ALCOSCAN iblow10 Pro",
      description:
        "搭載 'SuraCell™' 技術（燃料電池感測器）的 iblow10 Pro，是一款可同時使用酒精偵測模式與酒精測量模式的產品，並採用高耐久性的燃料電池酒精感測器。",
      href: ROUTES.products.detail("iblow10-pro"),
      productImage: {
        src: "/images/home/products/sec2_img3.png",
        alt: "ALCOSCAN iblow10 Pro",
      },
      backgroundImage: {
        src: "/images/home/products/sec2_bg3.jpg",
        alt: "",
      },
    },
  ],
};
