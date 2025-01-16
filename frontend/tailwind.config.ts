import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayColor: "#D3D3D3",
        greenColor: "#16b450"
      },
      borderWidth:{
         "1": "1px",
      },
      borderColor:{
        grayColor: "#D3D3D3"
      },
      backgroundColor:{
        grayColor: "#D3D3D3",
        lightGrayColor: "#F9FAFB",
        mediumGrayColor: "#edf0f3"
      }
    },
  },
  plugins: [],
};
export default config;
