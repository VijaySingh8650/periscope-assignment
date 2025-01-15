import type { Config } from "tailwindcss";

const config: Config = {
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
        grayColor: "#D3D3D3"
      },
      borderWidth:{
         "1": "1px",
      },
      borderColor:{
        grayColor: "#D3D3D3"
      },
      backgroundColor:{
        grayColor: "#D3D3D3"
      }
    },
  },
  plugins: [],
};
export default config;
