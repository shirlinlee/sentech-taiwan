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
  categoryId?: ProductCategoryId;
  image: {
    src: string;
    alt: string;
  };
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
