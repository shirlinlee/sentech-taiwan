export const colors = {
  primary: "#005BAC",
  primaryDark: "#004A8F",
  primaryLight: "#E8F2FA",
  secondary: "#333333",
  secondaryLight: "#F5F5F5",
  white: "#FFFFFF",
  black: "#111111",
  border: "#E5E7EB",
  muted: "#6B7280",
  accent: "#E85D04",
} as const;

export const layout = {
  containerMaxWidth: "80rem",
  containerNarrowMaxWidth: "64rem",
  containerPadding: "1rem",
  containerPaddingSm: "1.5rem",
  containerPaddingLg: "2rem",
} as const;

export const borderRadius = {
  button: "0.375rem",
  container: "0.5rem",
} as const;

export const theme = {
  colors,
  layout,
  borderRadius,
} as const;
