import Link from "next/link";

import { navigation } from "@/data/navigation";
import { cn } from "@/utils/cn";

import styles from "./Navigation.module.scss";

type NavigationProps = {
  className?: string;
};

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={className} aria-label="主選單">
      <ul className={styles.menu}>
        {navigation.map((item) => (
          <li
            key={item.href}
            className={cn(
              styles.menuItem,
              item.children && styles.menuItemHasChildren,
            )}
          >
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>

            {item.children && (
              <div className={styles.submenu}>
                <ul className={styles.submenuList}>
                  {item.children.map((child) => (
                    <li key={child.href} className={styles.submenuItem}>
                      <Link href={child.href} className={styles.submenuLink}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
