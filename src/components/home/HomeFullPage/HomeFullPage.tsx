"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { HomePageData } from "@/types/home";

import { Footer } from "@/components/layout/Footer";
import { footerData } from "@/data/footer";

import { BackToTopButton } from "../BackToTopButton";
import { HeroSection } from "../HeroSection";
import { ProductCarousel } from "../ProductCarousel";

import styles from "./HomeFullPage.module.scss";

import "swiper/css";

type HomeFullPageProps = {
  data: HomePageData;
};

export function HomeFullPage({ data }: HomeFullPageProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTo = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className={styles.root}>
      <Swiper
        className={styles.swiper}
        modules={[Mousewheel, Keyboard]}
        direction="vertical"
        slidesPerView="auto"
        speed={800}
        mousewheel={{
          forceToAxis: true,
          thresholdDelta: 20,
        }}
        keyboard={{ enabled: true }}
        resistanceRatio={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        <SwiperSlide className={styles.slideHero}>
          <HeroSection data={data.hero} onScrollDown={() => slideTo(1)} />
        </SwiperSlide>

        <SwiperSlide className={styles.slideProducts}>
          <ProductCarousel
            products={data.products}
            onScrollDown={() => slideTo(2)}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.slideFooter}>
          <div className={styles.footerSlide}>
            <Footer data={footerData} />
          </div>
        </SwiperSlide>
      </Swiper>

      {activeIndex >= 1 ? (
        <BackToTopButton
          className={styles.backToTop}
          onClick={() => slideTo(0)}
        />
      ) : null}
    </div>
  );
}
