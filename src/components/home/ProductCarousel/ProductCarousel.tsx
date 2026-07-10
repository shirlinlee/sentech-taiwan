"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { ProductSlideData } from "@/types/home";

import { ProductSlide } from "../ProductSlide";
import { ScrollDownButton } from "../ScrollDownButton";

import styles from "./ProductCarousel.module.scss";

import "swiper/css";
import "swiper/css/effect-fade";

type ProductCarouselProps = {
  products: ProductSlideData[];
  onScrollDown?: () => void;
};

export function ProductCarousel({
  products,
  onScrollDown,
}: ProductCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.section} aria-label="Products">
      <Swiper
        className={styles.swiper}
        modules={[EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        speed={600}
        loop
        nested
        grabCursor
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className={styles.slide} >
            <ProductSlide data={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className={`${styles.navButton} ${styles.prev}`}
        aria-label="Previous product"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.navButton} ${styles.next}`}
        aria-label="Next product"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {onScrollDown ? (
        <ScrollDownButton
          className={styles.scrollDown}
          onClick={onScrollDown}
          label="Scroll to next section"
        />
      ) : null}
    </section>
  );
}
