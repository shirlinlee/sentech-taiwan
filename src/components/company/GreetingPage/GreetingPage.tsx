import Image from "next/image";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import type { GreetingPageData } from "@/types/company";

import styles from "./GreetingPage.module.scss";

type GreetingPageProps = {
  data: GreetingPageData;
};

export function GreetingPage({ data }: GreetingPageProps) {
  const { breadcrumb, heroImage, heading, paragraphs } = data;

  return (
    <article className={styles.article}>
      <Container>
        <Breadcrumb items={breadcrumb} />

        <div className={styles.heroFrame}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className={styles.heroImage}
            priority
          />
        </div>
      </Container>

      <Container>
        <div className={styles.body}>
          <h2 className={styles.heading}>
            <span className={styles.highlight}>{heading.highlight}</span>
          </h2>

          <div className={styles.content}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
