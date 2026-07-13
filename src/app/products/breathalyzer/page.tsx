import type { Metadata } from "next";

import { ProductListPage } from "@/components/products/ProductListPage";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { breathalyzerPageData } from "@/data/Products/breathalyzer";

export const metadata: Metadata = {
  title: "酒測器",
  description:
    "SENTECH KOREA 酒測器產品一覽，包含點火連鎖、證據用、篩檢與系統設備等產品線。",
};

export default function BreathalyzerListPage() {
  return (
    <main>
      <SubPageLayout>
        <ProductListPage data={breathalyzerPageData} />
      </SubPageLayout>
    </main>
  );
}
