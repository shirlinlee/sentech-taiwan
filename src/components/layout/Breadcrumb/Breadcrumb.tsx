import Link from "next/link";

import type { BreadcrumbEntry } from "@/types/page";
import { cn } from "@/utils/cn";

import styles from "./Breadcrumb.module.scss";

type BreadcrumbProps = {
  items: BreadcrumbEntry[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.nav} aria-label="麵包屑導覽">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {item.href && !isLast ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(styles.text, isLast && styles.current)}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
