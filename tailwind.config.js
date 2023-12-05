module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
      default: ["Anaheim"],
      lato: ["Lato"],
    },
    screens: {
      xs: "576",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-background": "#1C1D1F",
        "primary-color": "#F8F8F8",
        "primary-border": "#383739",
        "cards-background": "#28292F",
        "secondary-color": "#C0C2C2",
        "primary-button": "#ACF866",
        danger: "#F46D6D",
        "secondary-cards-background": "#101314",
        "secondary-button": "#28292F",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        shadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.25)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.500"),
            maxWidth: "65ch",
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.400"),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
    backgroundColor: ["active"],
  },
  plugins: [],
};