import type { BreadcrumbEntry } from "@/types/page";

export type RequestCategory = "product" | "service";

export type RequestFormFieldLabels = {
  category: string;
  subject: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  requiredMark: string;
  categoryPlaceholder: string;
  phonePlaceholder: string;
  agreeLabel: string;
  submit: string;
  cancel: string;
};

export type RequestPrivacySection = {
  title: string;
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

export type RequestPageData = {
  breadcrumb: BreadcrumbEntry[];
  title: string;
  categoryOptions: {
    value: RequestCategory;
    label: string;
  }[];
  labels: RequestFormFieldLabels;
  privacy: RequestPrivacySection;
  successMessage: string;
};
