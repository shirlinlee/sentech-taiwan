"use client";

import type { HeroSectionData } from "@/types/home";

import { ScrollDownButton } from "../ScrollDownButton";

import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
  data: HeroSectionData;
  onScrollDown?: () => void;
};

export function HeroSection({ data, onScrollDown }: HeroSectionProps) {
  const { badge, videoSrc, videoPoster } = data;

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
        <p className={styles.badge}>{badge}</p>
      </div>

      <ScrollDownButton
        className={styles.scrollDown}
        onClick={onScrollDown}
        label="Scroll to products"
      />
    </section>
  );
}
