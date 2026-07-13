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
  const { privacy, companyName, address, inquiry, service, phone, fax, copyright } =
    data;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.info}>
            {/* <Image
              src={mainLogo.src}
              alt={mainLogo.alt}
              width={mainLogo.width}
              height={mainLogo.height}
              className={styles.logo}
            /> */}
           

            <p className={styles.line}>
              {companyName} {address}
            </p>

            <p className={styles.line}>
              <span>
                {inquiry.label}：
                <a href={`mailto:${inquiry.email}`} className={styles.link}>
                  {inquiry.email}
                </a>
              </span>
              <span className={styles.separator} aria-hidden="true">
                {" "}
              </span>
              <span>
                {service.label}：
                <a href={`mailto:${service.email}`} className={styles.link}>
                  {service.email}
                </a>
              </span>
            </p>

            <p className={styles.line}>
              {phone.label}：{phone.value}
              <span className={styles.separator} aria-hidden="true">
                {" "}
              </span>
              {fax.label}：{fax.value}
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
