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
