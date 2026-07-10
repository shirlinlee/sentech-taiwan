"use client";

import type { HeroSectionData } from "@/types/home";
import Link from "next/link";
import { ScrollDownButton } from "../ScrollDownButton";

import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
  data: HeroSectionData;
  onScrollDown?: () => void;
};

export function HeroSection({ data, onScrollDown }: HeroSectionProps) {
  const { badge, link, videoSrc, videoPoster } = data;

  return (
    <section className={styles.section} aria-label="Hero">
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster={videoPoster}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <Link href={link as Url} className={styles.badge}>
          {badge} 
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <ScrollDownButton
        className={styles.scrollDown}
        onClick={onScrollDown}
        label="Scroll to products"
      />
    </section>
  );
}
