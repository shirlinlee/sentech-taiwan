export const ROUTES = {
  home: "/",
  company: {
    greeting: "/company/greeting",
    history: "/company/history",
    organization: "/company/organization",
    location: "/company/location",
  },
  products: {
    index: "/products",
    breathalyzer: "/products/breathalyzer",
    gasSensor: "/products/gas-sensor",
    detail: (slug: string) => `/products/${slug}`,
  },
  support: {
    request: "/support/request",
    download: "/support/download",
    notice: "/support/notice",
  },
  certification: "/certification",
  privacy: "/privacy",
} as const;
