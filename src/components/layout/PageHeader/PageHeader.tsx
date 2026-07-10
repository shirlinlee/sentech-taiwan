import { Container } from "@/components/ui/Container";
import type { PageHeaderData } from "@/types/page";

import styles from "./PageHeader.module.scss";

type PageHeaderProps = {
  data: PageHeaderData;
};

export function PageHeader({ data }: PageHeaderProps) {
  const { category, title } = data;

  return (
    <div className={styles.header}>
      <Container>
        <p className={styles.category}>{category}</p>
        <h1 className={styles.title}>{title}</h1>
      </Container>
    </div>
  );
}
