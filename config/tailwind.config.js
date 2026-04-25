/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Soft Teal
        teal: {
          50:  "#E8F7F6",
          100: "#C4ECEB",
          200: "#8ED9D6",
          300: "#58C6C1",
          400: "#2EB3AC",
          500: "#0F9B8E", // brand primary
          600: "#0C7C72",
          700: "#095E56",
          800: "#063F3A",
          900: "#032120",
        },
        // Secondary — Deep Navy
        navy: {
          50:  "#E8EBF1",
          100: "#C4CCDA",
          200: "#8A9AB8",
          300: "#506896",
          400: "#2D4878",
          500: "#1A2B4A", // brand secondary
          600: "#15223C",
          700: "#101A2E",
          800: "#0B1120",
          900: "#060812",
        },
        // Background — Soft Cream
        cream: {
          50:  "#FDFCF9",
          100: "#FAF8F3", // site background
          200: "#F5F0E8",
          300: "#EDE6D6",
          400: "#E0D5BF",
        },
        // Warm Gold accent
        gold: {
          100: "#FAF0D7",
          200: "#F2DC9F",
          300: "#E8C86A",
          400: "#D4A853", // primary accent
          500: "#C49240",
          600: "#A8791E",
        },
        // Semantic aliases
        brand: {
          primary:    "#0F9B8E",
          secondary:  "#1A2B4A",
          background: "#FAF8F3",
          surface:    "#FFFFFF",
          accent:     "#D4A853",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl":  ["60px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg":  ["48px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md":  ["40px", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "display-sm":  ["32px", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-xl":  ["28px", { lineHeight: "1.3",  letterSpacing: "-0.01em" }],
        "heading-lg":  ["24px", { lineHeight: "1.35" }],
        "heading-md":  ["20px", { lineHeight: "1.4"  }],
        "heading-sm":  ["18px", { lineHeight: "1.45" }],
        "body-xl":     ["18px", { lineHeight: "1.7"  }],
        "body-lg":     ["16px", { lineHeight: "1.7"  }],
        "body-md":     ["15px", { lineHeight: "1.65" }],
        "body-sm":     ["14px", { lineHeight: "1.6"  }],
        "caption":     ["12px", { lineHeight: "1.5", letterSpacing: "0.04em" }],
        "label":       ["11px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        "4.5": "1.125rem",
        "13":  "3.25rem",
        "15":  "3.75rem",
        "17":  "4.25rem",
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
        "30":  "7.5rem",
        "34":  "8.5rem",
        "38":  "9.5rem",
        "42":  "10.5rem",
        "46":  "11.5rem",
        "50":  "12.5rem",
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      maxWidth: {
        "content-sm": "640px",
        "content-md": "768px",
        "content-lg": "1024px",
        "content-xl": "1152px",
        "site":       "1280px",
      },
      borderRadius: {
        "none":   "0",
        "sm":     "4px",
        "DEFAULT":"6px",
        "md":     "8px",
        "lg":     "12px",
        "xl":     "16px",
        "2xl":    "24px",
        "3xl":    "32px",
        "4xl":    "40px",
        "full":   "9999px",
      },
      boxShadow: {
        "card-sm":  "0 1px 3px rgba(26,43,74,0.06), 0 1px 2px rgba(26,43,74,0.04)",
        "card":     "0 4px 16px rgba(26,43,74,0.08), 0 2px 6px rgba(26,43,74,0.04)",
        "card-lg":  "0 8px 32px rgba(26,43,74,0.10), 0 4px 12px rgba(26,43,74,0.05)",
        "card-xl":  "0 16px 48px rgba(26,43,74,0.12), 0 6px 16px rgba(26,43,74,0.06)",
        "teal-glow":"0 4px 20px rgba(15,155,142,0.25)",
        "teal-sm":  "0 2px 10px rgba(15,155,142,0.15)",
        "inset-sm": "inset 0 1px 3px rgba(26,43,74,0.08)",
      },
      backgroundImage: {
        "gradient-brand":    "linear-gradient(135deg, #0F9B8E 0%, #0C7C72 100%)",
        "gradient-navy":     "linear-gradient(135deg, #1A2B4A 0%, #0B1120 100%)",
        "gradient-hero":     "linear-gradient(160deg, #FAF8F3 0%, #E8F7F6 60%, #C4ECEB 100%)",
        "gradient-section":  "linear-gradient(180deg, #FAF8F3 0%, #FFFFFF 100%)",
        "gradient-card":     "linear-gradient(145deg, #FFFFFF 0%, #FAF8F3 100%)",
      },
      transitionDuration: {
        "250": "250ms",
      },
      transitionTimingFunction: {
        "brand": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-sm": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease-out both",
        "fade-in":   "fadeIn 0.4s ease-out both",
        "slide-in":  "slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        "pulse-teal":"pulseTeal 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseTeal: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
