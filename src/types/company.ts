import type { BreadcrumbEntry } from "@/types/page";

export type GreetingHeading = {
  prefix?: string;
  highlight?: string;
  suffix?: string;
};


export type GreetingPageData = {
  breadcrumb: BreadcrumbEntry[];
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  heading: GreetingHeading;
  paragraphs: string[];
};

export type HistoryEvent = {
  id: string;
  date: string;
  description: string;
};

export type HistoryPeriod = {
  id: string;
  label: string;
  events: HistoryEvent[];
};

export type HistoryPageData = {
  breadcrumb: BreadcrumbEntry[];
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  periods: HistoryPeriod[];
};
