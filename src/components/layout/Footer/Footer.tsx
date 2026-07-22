import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteLogos } from "@/constants/site";
import type { FooterData } from "@/types/footer";

import styles from "./Footer.module.scss";

type FooterProps = {
  data: FooterData;
};

export function Footer({ data }: FooterProps) {
  const { main: mainLogo } = siteLogos;
  const { privacy, companyName, address, inquiry, copyright } =
    data;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.info}>
            <b className={styles.line}>
              {companyName}
            </b>
            <p className={styles.line}>
              {address}
            </p>
            <p className={styles.line}>
              <span>
                {inquiry.label}：
                <a href={`mailto:${inquiry.email}`} className={styles.link}>
                  {inquiry.email}
                </a>
              </span>
              
            </p>
          </div>

          <div className={styles.brand}>
            <Link href={privacy.href} className={styles.privacy}>
              {privacy.label}
            </Link>
            <p className={styles.copyright}>{copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
