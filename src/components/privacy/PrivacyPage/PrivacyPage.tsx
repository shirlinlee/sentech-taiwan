import { Container } from "@/components/ui/Container";
import type { PrivacyPageData } from "@/types/privacy";

import styles from "./PrivacyPage.module.scss";

type PrivacyPageProps = {
  data: PrivacyPageData;
};

export function PrivacyPage({ data }: PrivacyPageProps) {
  const { title, privacy } = data;

  return (
    <article className={styles.article}>
      <Container>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </header>

        <section className={styles.content} aria-labelledby="privacy-heading">

          <h3 className={styles.heading}>{privacy.heading}</h3>
          <p>{privacy.intro}</p>
          <ul>
            {privacy.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className={styles.heading}>{privacy.transferTitle}</h3>
          {privacy.transferParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h3 className={styles.heading}>{privacy.rightsTitle}</h3>
          <p>{privacy.rightsIntro}</p>
          <ul>
            {privacy.rights.map((right) => (
              <li key={right}>{right}</li>
            ))}
          </ul>
          <p>{privacy.rightsNote}</p>
        </section>
      </Container>
    </article>
  );
}
