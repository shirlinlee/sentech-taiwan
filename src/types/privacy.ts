import type { BreadcrumbEntry } from "@/types/page";

export type PrivacyPolicyContent = {
  heading: string;
  intro: string;
  items: string[];
  transferTitle: string;
  transferParagraphs: string[];
  rightsTitle: string;
  rightsIntro: string;
  rights: string[];
  rightsNote: string;
};

export type PrivacyPageData = {
  breadcrumb: BreadcrumbEntry[];
  title: string;
  privacy: PrivacyPolicyContent;
};
