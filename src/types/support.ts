import type { BreadcrumbEntry } from "@/types/page";
import type { PrivacyPolicyContent } from "@/types/privacy";

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

export type RequestPageData = {
  breadcrumb: BreadcrumbEntry[];
  title: string;
  categoryOptions: {
    value: RequestCategory;
    label: string;
  }[];
  labels: RequestFormFieldLabels;
  privacy: PrivacyPolicyContent;
  successMessage: string;
};
