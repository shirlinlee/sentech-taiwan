import { ROUTES } from "@/constants/routes";
import type { NavigationItem } from "@/types/navigation";

export const navigation: NavigationItem[] = [
  {
    label: "公司介紹",
    href: ROUTES.company.greeting,
    children: [
      { label: "品牌介紹", href: ROUTES.company.greeting },
      { label: "公司沿革", href: ROUTES.company.history },
      // { label: "組織架構", href: ROUTES.company.organization },
      // { label: "公司據點", href: ROUTES.company.location },
    ],
  },
  {
    label: "產品介紹",
    href: ROUTES.products.index,
    children: [
      { label: "酒測器", href: ROUTES.products.breathalyzer },
      { label: "氣體感測器", href: ROUTES.products.gasSensor },
    ],
  },
  {
    label: "諮詢申請",
    href: ROUTES.support.request,
  },
  // {
  //   label: "KOLAS 認證證書",
  //   href: ROUTES.certification,
  // },
];
