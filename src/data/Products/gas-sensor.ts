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
    },
  ],
};
