import type { BreadcrumbEntry } from "@/types/page";

export type ProductCategoryId =
  | "ignition-locking"
  | "evidence"
  | "screening"
  | "system";

export type ProductCategory = {
  id: ProductCategoryId;
  label: string;
};

export type ProductListItem = {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  categoryId?: ProductCategoryId;
  image: {
    src: string;
    alt: string;
  };
  summary?: string;
  description?: string[];
  gallery?: {
    src: string;
    alt: string;
  }[];
  pdf?: string;
  specifications?: {
    label: string;
    value: string;
  }[];
  heroVideo?: string;
  featured?: boolean;
};

export type ProductListPageData = {
  breadcrumb: BreadcrumbEntry[];
  title: string;
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  categories?: ProductCategory[];
  products: ProductListItem[];
};

export type ProductLineId = "breathalyzer" | "gas-sensor";

export type ProductDetailData = {
  product: ProductListItem;
  line: {
    id: ProductLineId;
    title: string;
    href: string;
    heroImage: ProductListPageData["heroImage"];
    categories?: ProductCategory[];
  };
};
