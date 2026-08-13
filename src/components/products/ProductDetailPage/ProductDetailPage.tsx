"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import type { ProductDetailData } from "@/types/product";
import { cn } from "@/utils/cn";

import styles from "./ProductDetailPage.module.scss";

const GALLERY_AUTOPLAY_MS = 3000;

type ProductDetailPageProps = {
  data: ProductDetailData;
};

export function ProductDetailPage({ data }: ProductDetailPageProps) {
  const { product, line } = data;
  const gallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const brand =
    product.brand ?? (line.id === "breathalyzer" ? "ALCOSCAN" : undefined);
  const hasMultipleImages = gallery.length > 1;
  const activeImage = gallery[activeImageIndex] ?? product.image;

  const showPreviousImage = () => {
    setActiveImageIndex((index) =>
      index === 0 ? gallery.length - 1 : index - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((index) =>
      index === gallery.length - 1 ? 0 : index + 1,
    );
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    if (!hasMultipleImages || isHoveringGallery || isLightboxOpen) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImageIndex((index) =>
        index === gallery.length - 1 ? 0 : index + 1,
      );
    }, GALLERY_AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [gallery.length, hasMultipleImages, isHoveringGallery, isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        showPreviousImage();
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        showNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, hasMultipleImages]);

  return (
    <article className={styles.article}>
      <Container>
        <Breadcrumb
          items={[
            { label: "產品介紹" },
            { label: line.title, href: line.href },
            { label: product.name },
          ]}
        />

        <section className={styles.overview}>
          <div className={styles.gallery}>
            <div
              className={styles.galleryFrame}
              onMouseEnter={() => setIsHoveringGallery(true)}
              onMouseLeave={() => setIsHoveringGallery(false)}
            >
              <div className={styles.gallerySlides} aria-live="polite">
                {gallery.map((image, index) => {
                  const isActive = index === activeImageIndex;

                  return (
                    <div
                      key={`${image.src}-${index}`}
                      className={cn(
                        styles.gallerySlide,
                        isActive && styles.gallerySlideActive,
                      )}
                    >
                      <button
                        type="button"
                        className={styles.galleryImageButton}
                        onClick={openLightbox}
                        aria-label={`放大檢視 ${image.alt}`}
                        tabIndex={isActive ? 0 : -1}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={640}
                          height={640}
                          className={styles.galleryImage}
                          priority={index === 0}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              {hasMultipleImages ? (
                <>
                  <button
                    type="button"
                    className={cn(styles.galleryArrow, styles.galleryArrowPrev)}
                    onClick={showPreviousImage}
                    aria-label="上一張圖片"
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
                    className={cn(styles.galleryArrow, styles.galleryArrowNext)}
                    onClick={showNextImage}
                    aria-label="下一張圖片"
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
                </>
              ) : null}
            </div>
          </div>

          <div className={styles.info}>
            {brand ? <p className={styles.brand}>{brand}</p> : null}
            <h2 className={styles.name}>{product.name}</h2>

            {product.description && product.description.length > 0 ? (
              <ul className={styles.descriptionList}>
                {product.description.map((item) => (
                  <li key={item} className={styles.descriptionItem}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : product.summary ? (
              <p className={styles.summary}>{product.summary}</p>
            ) : null}
          </div>
        </section>

        {product.specifications && product.specifications.length > 0 ? (
          <section className={styles.specs}>
            <h3 className={styles.specsTitle}>產品規格</h3>
            <dl className={styles.specsList}>
              {product.specifications.map((spec) => (
                <div key={spec.label} className={styles.specsRow}>
                  <dt className={styles.specsLabel}>{spec.label}</dt>
                  <dd className={styles.specsValue}>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
      </Container>

      {isLightboxOpen ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} 圖片檢視`}
          onClick={closeLightbox}
        >
          <div
            className={styles.lightboxInner}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="關閉圖片檢視"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className={styles.lightboxImageWrap}>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1200}
                height={1200}
                className={styles.lightboxImage}
              />
            </div>

            {hasMultipleImages ? (
              <>
                <button
                  type="button"
                  className={cn(
                    styles.lightboxArrow,
                    styles.lightboxArrowPrev,
                  )}
                  onClick={showPreviousImage}
                  aria-label="上一張圖片"
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
                  className={cn(
                    styles.lightboxArrow,
                    styles.lightboxArrowNext,
                  )}
                  onClick={showNextImage}
                  aria-label="下一張圖片"
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
                <p className={styles.lightboxCounter}>
                  {activeImageIndex + 1} / {gallery.length}
                </p>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
