import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailPage } from "@/components/products/ProductDetailPage";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/data/Products/catalog";

type ProductDetailRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getProductBySlug(slug);

  if (!data) {
    return {
      title: "產品詳情",
    };
  }

  return {
    title: data.product.name,
    description:
      data.product.summary ??
      `${data.product.name}｜${data.line.title}｜SENTECH Korea`,
  };
}

export default async function ProductDetailRoute({
  params,
}: ProductDetailRouteProps) {
  const { slug } = await params;
  const data = getProductBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <SubPageLayout>
        <ProductDetailPage data={data} />
      </SubPageLayout>
    </main>
  );
}
