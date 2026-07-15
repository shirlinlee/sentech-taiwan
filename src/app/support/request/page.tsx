import type { Metadata } from "next";

import { RequestPage } from "@/components/support/RequestPage";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { requestPageData } from "@/data/Support/request";

export const metadata: Metadata = {
  title: "諮詢申請",
  description: "填寫諮詢申請表單，我們將盡快與您聯繫。",
};

export default function SupportRequestPage() {
  return (
    <main>
      <SubPageLayout>
        <RequestPage data={requestPageData} />
      </SubPageLayout>
    </main>
  );
}
