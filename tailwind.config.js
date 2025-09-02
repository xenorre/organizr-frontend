export const content = ["./index.html", "./src/**/*.{ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      brand: {
        50: "var(--brand-50)",
        100: "var(--brand-100)",
        200: "var(--brand-200)",
        300: "var(--brand-300)",
        400: "var(--brand-400)",
        500: "var(--brand-500)",
        600: "var(--brand-600)",
        700: "var(--brand-700)",
        800: "var(--brand-800)",
        900: "var(--brand-900)",
      },
      ui: {
        canvas: "var(--bg-canvas)",
        surface: "var(--bg-surface)",
        muted: "var(--bg-muted)",
        border: "var(--border)",
        text: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
    },
    borderRadius: {
      sm: "var(--radius-sm)",
      DEFAULT: "var(--radius-md)",
      lg: "var(--radius-lg)",
      pill: "var(--radius-pill)",
    },
    boxShadow: {
      1: "var(--shadow-1)",
      2: "var(--shadow-2)",
      floating: "var(--shadow-floating)",
    },
  },
};
