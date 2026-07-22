import type { Metadata } from "next";

import { PrivacyPage } from "@/components/privacy/PrivacyPage";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { privacyPageData } from "@/data/privacy";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "了解我們如何蒐集、使用與保護您的個人資料。",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SubPageLayout>
        <PrivacyPage data={privacyPageData} />
      </SubPageLayout>
    </main>
  );
}
