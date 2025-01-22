/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        domine: ["var(--font-domine)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },

      colors: {
        foreground: {
          DEFAULT: "var(--foreground)",
          btn: "#eeeeee",
          common: "#474747",
          grey: "#818181",
          title: "#008A90",
        },

        background: {
          DEFAULT: "#F5F3F3",
          dark: "#27303EF2",
          // DEFAULT: "var(--background)",
        },

        primary: {
          DEFAULT: "#5CA8AD",
          logo: "#00ADB5",
          hover: "#D9D9D9",
          card: "#FEFDFD",
        },
      },
      boxShadow: {
        primary: "2px 4px 10px 2px #6d6d6d40",
        "primary-hover": "1px 4px 10px 0px #438290",
      },
    },
  },
  plugins: [],
}
