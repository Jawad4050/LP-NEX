import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueefast: 'marquee 24s linear infinite',
      },
      fontFamily: {
        AeonikProLight: ['AeonikProLight', 'sans-serif'],
        AeonikProRegular: ['AeonikProRegular', 'sans-serif'],
        AeonikProMedium: ['AeonikProMedium', 'sans-serif'],
        AeonikProBold: ['AeonikProBold', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-50%)', // Move left by 50% of the total width (half the duplicated content)
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
