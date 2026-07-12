"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { ROUTES } from "@/constants/routes";
import type { ProductCategoryId, ProductListPageData } from "@/types/product";
import { cn } from "@/utils/cn";

import styles from "./ProductListPage.module.scss";

type ProductListPageProps = {
  data: ProductListPageData;
};

export function ProductListPage({ data }: ProductListPageProps) {
  const { breadcrumb, title, heroImage, categories = [], products } = data;
  const hasCategories = categories.length > 0;
  const [activeCategoryId, setActiveCategoryId] =
    useState<ProductCategoryId | "all">("all");

  const visibleProducts =
    !hasCategories || activeCategoryId === "all"
      ? products
      : products.filter((product) => product.categoryId === activeCategoryId);

  return (
    <article className={styles.article}>
      <Container>
        <Breadcrumb items={breadcrumb} />

        <div
          className={styles.heroFrame}
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <h1 className={styles.title}>{title}</h1>
        </div>

        {hasCategories ? (
          <header className={styles.header}>
            <nav className={styles.categoryNav} aria-label="產品線分類">
              <ul className={styles.categoryList}>
                <li className={styles.categoryItem}>
                  <button
                    type="button"
                    className={cn(
                      styles.categoryButton,
                      activeCategoryId === "all" && styles.categoryButtonActive,
                    )}
                    aria-current={
                      activeCategoryId === "all" ? "true" : undefined
                    }
                    onClick={() => setActiveCategoryId("all")}
                  >
                    全部
                  </button>
                </li>
                {categories.map((category) => {
                  const isActive = category.id === activeCategoryId;

                  return (
                    <li key={category.id} className={styles.categoryItem}>
                      <button
                        type="button"
                        className={cn(
                          styles.categoryButton,
                          isActive && styles.categoryButtonActive,
                        )}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => setActiveCategoryId(category.id)}
                      >
                        {category.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>
        ) : null}

        <ul className={styles.productGrid}>
          {visibleProducts.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <Link
                href={ROUTES.products.detail(product.slug)}
                className={styles.productLink}
              >
                <div
                  className={styles.productImageWrap}
                  style={{ backgroundImage: `url(${product.image.src})` }}
                />
                <span className={styles.productName}>{product.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {visibleProducts.length === 0 ? (
          <p className={styles.empty}>此產品線目前尚無產品資料。</p>
        ) : null}
      </Container>
    </article>
  );
}
