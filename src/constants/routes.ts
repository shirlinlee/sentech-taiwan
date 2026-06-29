export const ROUTES = {
  home: "/",
  company: {
    index: "/company",
    greeting: "/company/greeting",
    history: "/company/history",
    organization: "/company/organization",
    location: "/company/location",
  },
  products: {
    index: "/products",
    detail: (slug: string) => `/products/${slug}`,
  },
  support: {
    request: "/support/request",
    download: "/support/download",
    notice: "/support/notice",
  },
  contact: "/contact",
} as const;
