export const designTokens = {
  color: {
    primary: "#003dff",
    surface: "#f7f5f2",
    text: "#171717",
    textMuted: "#a3a3a3",
    border: "#e5e5e5"
  },
  font: {
    body: "Work Sans",
    heading: "Gloock"
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
