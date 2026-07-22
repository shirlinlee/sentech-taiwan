import { ROUTES } from "@/constants/routes";
import type { FooterData } from "@/types/footer";

export const footerData: FooterData = {
  privacy: {
    label: "隱私政策",
    href: ROUTES.privacy,
  },
  companyName: "潤貿有限公司",
  address: "台中市西屯區環中路二段26-17號",
  inquiry: {
    label: "詢問",
    email: "tichu.yang@tangent-tech.com",
  },
  copyright: "© 2026 潤貿有限公司版權所有",
};
