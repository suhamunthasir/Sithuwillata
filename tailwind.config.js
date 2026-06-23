/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // === Brand colours derived from the Sithuwillata Athwalak logo ===
        brand: {
          yellow: "#F4B400", // primary logo yellow
          "yellow-soft": "#F8C53A",
          "yellow-deep": "#D99A00",
          charcoal: "#4A4A48", // logo charcoal grey
          "charcoal-deep": "#33332F",
          ink: "#2A2A28",
          cream: "#FFF8E5", // soft warm background
          "cream-deep": "#FCEFC9",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        // Clean editorial serif for big headings (even, upright letterforms)
        display: ['"Lora"', "Georgia", "serif"],
        // Clean sans for body / UI
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 28s linear infinite",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
      },
    },
  },
  plugins: [],
};
