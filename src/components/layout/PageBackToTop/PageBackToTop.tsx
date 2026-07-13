"use client";

import { BackToTopButton } from "@/components/home/BackToTopButton";

import styles from "./PageBackToTop.module.scss";

export function PageBackToTop() {
  return (
    <BackToTopButton
      className={styles.button}
      label="回到頂部"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
}
