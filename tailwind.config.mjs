/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        matisse: {
          25: "hsl(214, 47%, 98%)",
          50: "hsl(214, 47%, 97%)",
          100: "hsl(214, 44%, 94%)",
          200: "hsl(211, 44%, 86%)",
          300: "hsl(209, 46%, 74%)",
          400: "hsl(207, 45%, 60%)",
          500: "hsl(207, 42%, 48%)",
          DEFAULT: "hsl(209, 47%, 40%)",
          600: "hsl(209, 47%, 40%)",
          700: "hsl(210, 46%, 32%)",
          800: "hsl(210, 43%, 27%)",
          900: "hsl(211, 38%, 24%)",
          950: "hsl(213, 38%, 16%)",
        },
        matisse_orange: {
          500: "#E1AA74",
          DEFAULT: "#FF9843",
        },
        matisse_yellow: {
          500: "#F4E869",
          DEFAULT: "#FFDD95",
          700: "#FFC436",
        },
        matisse_beige: {
          200: "#F5EFE7",
          DEFAULT: "#F3F0CA",
          700: "#D8C4B6",
        },
        matisse_sky: {
          100: "hsl(214, 60%, 80%)",
          DEFAULT: "#86A7FC",
        },
        matisse_shine_blue: {
          DEFAULT: "#337CCF",
          800: "#1450A3",
        },
        matisse_retro_blue: {
          200: "hsl(214deg 10% 51%)",
          DEFAULT: "#4F709C",
          800: "#213555",
        },
        matisse_navy: {
          DEFAULT: "#192655",
        },
        matisse_purple: {
          DEFAULT: "#191D88",
        },
        matisse_gray: {
          50: "hsl(214, 27%, 96%)",
          100: "hsl(214, 25%, 95%)",
        },
        soft_gray: {
          50: "hsl(0, 0%, 92%)",
          100: "hsl(0, 0%, 90%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(0, 0%, 80%)",
          400: "hsl(0, 0%, 68%)",
          500: "hsl(0, 0%, 56%)",
          600: "hsl(0, 0%, 41%)",
          700: "hsl(0, 0%, 37%)",
        },
        blue_gray: {
          50: "hsl(210deg 25% 95.29%)",
          100: "hsl(209 6% 70%)",
          200: "hsl(209 6% 60%)",
          300: "hsl(209 6% 50%)",
        },
        blue_dark: {
          300: "hsl(214 17% 13%)",
          500: "hsl(211.9deg 21.59% 14.88%)",
          700: "hsl(211.9deg 39.47% 16.29%)",
          800: "hsl(207.69deg 44.83% 11.37%)",
        },
        dm_blue: {
          50: "hsl(206.4deg 29.41% 83.33%)",
          500: "hsl(210deg 35% 31.37%)",
          800: "hsl(209.74deg 80.42% 28.04%)",
        },
        ws: {
          DEFAULT: "#25D366",
          100: "#128C7E",
          900: "#075E54",
        },
        gray: {
          900: "#0f1011",
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        mdhero: "0.5fr minmax(300px,1fr) 0.5fr",
        lghero: "0.5fr minmax(300px,1fr) 0.5fr",
        xlhero: "0.5fr minmax(300px,1fr) 0.5fr",
        withSidebar: "18dvw auto",
        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      containers: {
        "2xs": "16rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "blue-img":
          'url("https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "green-img":
          'url("https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "purple-img":
          'url("https://images.unsplash.com/photo-1511800453077-8c0afa94175f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "red-img":
          'url("https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "yellow-img":
          'url("https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
      },
      minHeight: {
        14: "3.5rem",
      },
      minWidth: {
        14: "3.5rem",
      },
      transitionTimingFunction: {
        "in-out": "cubic-bezier(0.2, 1, 0.25, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
