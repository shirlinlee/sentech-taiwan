"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HamburgerIcon } from "@/components/ui/HamburgerIcon";
import { Container } from "@/components/ui/Container";
import { headerConfig, siteLogos } from "@/constants/site";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

import { Navigation } from "../Navigation";

import styles from "./Header.module.scss";
import styles_navigation from "../Navigation/Navigation.module.scss";

export function Header() {
  const { menuLabel } = headerConfig;
  const { main: mainLogo } = siteLogos;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link href={ROUTES.home} className={styles.logo}>
            <Image
              src={mainLogo.src}
              alt={mainLogo.alt}
              width={mainLogo.width}
              height={mainLogo.height}
              priority
            />
          </Link>

          <Navigation
            className={cn(
              styles_navigation.navigation,
              isMenuOpen && styles_navigation.navigationOpen,
            )}
          />

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuLabel}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </Container>
    </header>
  );
}
