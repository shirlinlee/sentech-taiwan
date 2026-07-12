import type { Metadata } from "next";

import { ProductListPage } from "@/components/products/ProductListPage";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { gasSensorPageData } from "@/data/Products/gas-sensor";

export const metadata: Metadata = {
  title: "氣體感測器",
  description: "SENTECH KOREA 氣體感測器產品一覽，提供半導體氣體感測器解決方案。",
};

export default function GasSensorListPage() {
  return (
    <main>
      <SubPageLayout>
        <ProductListPage data={gasSensorPageData} />
      </SubPageLayout>
    </main>
  );
}
