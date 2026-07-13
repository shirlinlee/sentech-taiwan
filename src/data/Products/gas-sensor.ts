import type { ProductListPageData } from "@/types/product";

export const gasSensorPageData: ProductListPageData = {
  breadcrumb: [
    { label: "產品介紹" },
    { label: "氣體感測器" },
  ],
  title: "氣體感測器",
  heroImage: {
    src: "/images/product/kv_gas.jpg",
    alt: "Gas sensor",
    width: 1200,
    height: 400,
  },
  products: [
    {
      id: "stk-4000",
      slug: "stk-4000",
      name: "STK-4000",
      image: {
        src: "/images/product/STK-4000/stk4000.png",
        alt: "STK-4000",
      },
      summary: "VOC 氣體感測器，適用於空氣品質監測。",
      description: [
        "目標氣體：一般空氣污染物。",
        "應用：空氣品質控制。",
      ],
    },
  ],
};
