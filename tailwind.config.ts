import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rarity-1": "#CEC7CE",
        "rarity-2": "#CEC7CE",
        "rarity-3": "#8CAE5B",
        "rarity-4": "#5A9A6B",
        "rarity-5": "#9BDEF8",
        "rarity-6": "#6764D7",
        "rarity-7": "#6B006A",
        "rarity-8": "#C5794A",
        "rarity-9": "#BD414B",
        "rarity-10": "#4ED1F5",
        "rarity-11": "#CEAA52",
        "rarity-12": "#D5ECFA",
        "potion-green": "#589E6A",
        "background": "#f4f3f2",
      },
    },
  },
  plugins: [],
};
export default config;
