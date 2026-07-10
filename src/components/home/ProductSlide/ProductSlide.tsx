import Image from "next/image";
import Link from "next/link";

import type { ProductSlideData } from "@/types/home";

import styles from "./ProductSlide.module.scss";

type ProductSlideProps = {
  data: ProductSlideData;
};

export function ProductSlide({ data }: ProductSlideProps) {
  const { id, label, name, description, href, productImage, backgroundImage } =
    data;

  return (
    <article className={styles.slide}>
      <div className={styles.visual} style={{ backgroundImage: `url(${backgroundImage.src})` }} />

      <div className={styles.content}>
		<div className={`${styles.productImageContainer} ${id}`}>
			<Image
				src={productImage.src}
				alt={productImage.alt}
				width={480}
				height={640}
				sizes="(min-width: 768px) 22rem, 55vw"
			/>
        </div>
		<div className={styles.slideContent}>
			<p className={styles.label}>{label}</p>
			<h2 className={styles.name}>{name}</h2>
			<p className={styles.description}>{description}</p>
			<Link href={href} className={styles.cta}>
			View more
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width={24}>
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
		
      </div>
    </article>
  );
}
