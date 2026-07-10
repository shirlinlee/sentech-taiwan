import type { Metadata } from "next";

import { GreetingPage } from "@/components/company/GreetingPage";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { greetingPageData } from "@/data/Company/greeting";

export const metadata: Metadata = {
  title: "品牌介紹",
  description:
    "Sentech Korea Corp. 品牌介紹與董事長致詞，了解半導體氣體感測器技術與全球市場領導地位。",
};

export default function CompanyGreetingPage() {
  return (
    <main>
      <SubPageLayout>
        <GreetingPage data={greetingPageData} />
      </SubPageLayout>
    </main>
  );
}
