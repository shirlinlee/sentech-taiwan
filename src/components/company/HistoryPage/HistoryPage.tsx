"use client";

import { useState } from "react";
import Image from "next/image";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import type { HistoryPageData } from "@/types/company";
import { cn } from "@/utils/cn";

import styles from "./HistoryPage.module.scss";

type HistoryPageProps = {
  data: HistoryPageData;
};

export function HistoryPage({ data }: HistoryPageProps) {
  const { breadcrumb, heroImage, periods } = data;
  const [activePeriodId, setActivePeriodId] = useState(periods[0]?.id ?? "");

  const activePeriod =
    periods.find((period) => period.id === activePeriodId) ?? periods[0];

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
        <div className={styles.timeline}>
          <nav className={styles.periodNav} aria-label="公司沿革年代">
            <label className={styles.periodSelectLabel}>
              <span className={styles.visuallyHidden}>選擇年代</span>
              <select
                className={styles.periodSelect}
                value={activePeriodId}
                onChange={(event) => setActivePeriodId(event.target.value)}
              >
                {periods.map((period) => (
                  <option key={period.id} value={period.id}>
                    {period.label}
                  </option>
                ))}
              </select>
            </label>

            <ul className={styles.periodList}>
              {periods.map((period) => {
                const isActive = period.id === activePeriod?.id;

                return (
                  <li key={period.id} className={styles.periodItem}>
                    <button
                      type="button"
                      className={cn(
                        styles.periodButton,
                        isActive && styles.periodButtonActive,
                      )}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setActivePeriodId(period.id)}
                    >
                      {period.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.eventPanel}>
            <ul className={styles.eventList}>
              {activePeriod?.events.map((event) => (
                <li key={event.id} className={styles.eventItem}>
                  <time className={styles.eventDate} dateTime={event.date}>
                    {event.date}
                  </time>
                  <p className={styles.eventDescription}>{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </article>
  );
}
