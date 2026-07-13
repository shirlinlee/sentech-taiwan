"use client";

import { cn } from "@/utils/cn";

import styles from "./BackToTopButton.module.scss";

type BackToTopButtonProps = {
  onClick?: () => void;
  className?: string;
  label?: string;
};

export function BackToTopButton({
  onClick,
  className,
  label = "Back to top",
}: BackToTopButtonProps) {
  return (
    <button
      type="button"
      className={cn(styles.button, className)}
      onClick={onClick}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 15l6-6 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
