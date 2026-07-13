import { ROUTES } from "@/constants/routes";
import type { FooterData } from "@/types/footer";

export const footerData: FooterData = {
  privacy: {
    label: "隱私政策",
    href: ROUTES.privacy,
  },
  companyName: "SENTECH KOREA CORP. (Sinchon-dong)",
  address: "韓國京畿道坡州市 jimokro 75beon-gil 21-6, 10880",
  inquiry: {
    label: "詢問",
    email: "sentech@sentechkorea.com",
  },
  service: {
    label: "售後服務",
    email: "sentech@sentechkorea.com",
  },
  phone: {
    label: "電話",
    value: "+82 31 8071 4400",
  },
  fax: {
    label: "傳真",
    value: "+82 31 8071 4411",
  },
  copyright: "© 2022 SENTECHKOREA 版權所有。",
};
