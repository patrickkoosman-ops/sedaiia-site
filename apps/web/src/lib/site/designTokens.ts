export const designTokens = {
  color: {
    primary: "#003dff",
    surface: "#f3f4f8",
    text: "#0f172a",
    border: "#e8eaf0"
  },
  font: {
    body: "Inter",
    heading: "DM Serif Display"
  },
  radius: {
    card: "1rem"
  },
  spacing: {
    pageY: "py-12 md:py-16",
    sectionGap: "mt-12"
  }
} as const;

export type DesignTokens = typeof designTokens;
