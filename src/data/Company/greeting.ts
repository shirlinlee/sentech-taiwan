import type { GreetingPageData } from "@/types/company";
export const greetingPageData: GreetingPageData = {
  breadcrumb: [
    {
      label: "公司介紹",
    },
    {
      label: "品牌介紹",
    },
  ],
  heroImage: {
    src: "/images/company/ceo_img.jpg",
    alt: "SENTECH KOREA 全球據點與合作國家展示",
    width: 1200,
    height: 675,
  },
  heading: {
    highlight: "品牌介紹",
  },
  paragraphs: [
    "Sentech Korea Corp. 是一家由韓國最優秀研究機構之一的浦項工業科學技術研究院於 1998 年設立的創業公司。", 
    "憑藉先進的半導體氣體感測器技術，公司成功將呼氣酒精測試儀與氣體偵測器商品化，並以遍及 45 個以上國家的銷售網路成為全球市場的領導者。",
    "特別是搭載酒精專用感測器的呼氣酒精測試儀，兼具優異的耐久性、便利性、精準度與設計。","因此取得 CE、DOT、FDA 等國際認證，穩固地建立了世界第一產品的地位。科技走向世界，Sentech Korea 持續開拓感測器的新領域。",
  ],
};
