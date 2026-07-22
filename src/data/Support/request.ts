import type { RequestPageData } from "@/types/support";
import { privacyPolicyContent } from "@/data/privacy";

export const requestPageData: RequestPageData = {
  breadcrumb: [{ label: "諮詢申請" }],
  title: "諮詢申請",
  categoryOptions: [
    { value: "product", label: "產品" },
    { value: "service", label: "服務" },
  ],
  labels: {
    category: "分類",
    subject: "主旨",
    name: "姓名",
    email: "電子郵件",
    phone: "電話",
    message: "訊息",
    requiredMark: "*",
    categoryPlaceholder: "請選擇分類",
    phonePlaceholder: "僅限數字",
    agreeLabel: "我同意",
    submit: "送出",
    cancel: "取消",
  },
  privacy: privacyPolicyContent,
  successMessage: "您的諮詢已送出，我們將盡快與您聯繫。",
};
