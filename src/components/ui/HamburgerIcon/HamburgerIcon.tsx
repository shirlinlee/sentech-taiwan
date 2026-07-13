import { cn } from "@/utils/cn";

import styles from "./HamburgerIcon.module.scss";

type HamburgerIconProps = {
  isOpen: boolean;
  className?: string;
};

export function HamburgerIcon({ isOpen, className }: HamburgerIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(styles.icon, isOpen && styles.iconOpen, className)}
    >
      <line className={styles.barTop} x1="4" y1="7" x2="20" y2="7" />
      <line className={styles.barMiddle} x1="4" y1="12" x2="14" y2="12" />
      <line className={styles.barBottom} x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}
