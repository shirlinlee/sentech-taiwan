import type { Metadata } from "next";

import { HistoryPage } from "@/components/company/HistoryPage";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { historyPageData } from "@/data/Company/history";

export const metadata: Metadata = {
  title: "公司沿革",
  description: "SENTECH KOREA 公司沿革，了解從 1998 年成立至今的重要里程碑與發展歷程。",
};

export default function CompanyHistoryPage() {
  return (
    <main>
      <SubPageLayout>
        <HistoryPage data={historyPageData} />
      </SubPageLayout>
    </main>
  );
}
