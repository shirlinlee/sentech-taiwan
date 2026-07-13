"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import type { ProductDetailData } from "@/types/product";
import { cn } from "@/utils/cn";

import styles from "./ProductDetailPage.module.scss";

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
  const activeImage = gallery[activeImageIndex] ?? product.image;
  const brand = product.brand ?? (line.id === "breathalyzer" ? "ALCOSCAN" : undefined);
  const hasMultipleImages = gallery.length > 1;

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
            <div className={styles.galleryFrame}>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={640}
                height={640}
                className={styles.galleryImage}
                priority
              />

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

            {/* <div className={styles.actions}>
              <Link href={line.href} className={styles.actionButton}>
                返回列表
              </Link>
            </div> */}
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
    </article>
  );
}
