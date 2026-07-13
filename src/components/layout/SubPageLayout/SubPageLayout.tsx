import { Footer } from "@/components/layout/Footer";
import { PageBackToTop } from "@/components/layout/PageBackToTop";
import { footerData } from "@/data/footer";

import styles from "./SubPageLayout.module.scss";

type SubPageLayoutProps = {
  children: React.ReactNode;
};

export function SubPageLayout({ children }: SubPageLayoutProps) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
      <Footer data={footerData} />
      <PageBackToTop />
    </div>
  );
}
