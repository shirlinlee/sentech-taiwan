import { ROUTES } from "@/constants/routes";
import { breathalyzerPageData } from "@/data/Products/breathalyzer";
import { gasSensorPageData } from "@/data/Products/gas-sensor";
import type { ProductDetailData, ProductLineId } from "@/types/product";

const productLines: {
  id: ProductLineId;
  href: string;
  data: typeof breathalyzerPageData;
}[] = [
  {
    id: "breathalyzer",
    href: ROUTES.products.breathalyzer,
    data: breathalyzerPageData,
  },
  {
    id: "gas-sensor",
    href: ROUTES.products.gasSensor,
    data: gasSensorPageData,
  },
];

export function getAllProductSlugs(): string[] {
  return productLines.flatMap((line) =>
    line.data.products.map((product) => product.slug),
  );
}

export function getProductBySlug(slug: string): ProductDetailData | null {
  for (const line of productLines) {
    const product = line.data.products.find((item) => item.slug === slug);

    if (product) {
      return {
        product,
        line: {
          id: line.id,
          title: line.data.title,
          href: line.href,
          heroImage: line.data.heroImage,
          categories: line.data.categories,
        },
      };
    }
  }

  return null;
}
