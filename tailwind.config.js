/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-white": "#f6f6f6",
        "cherry-pink": "#ea3564",
        "default-text": "#151825",
        "gray-01": "#838d9b",
        "gray-02": "#778291",
        "gray-03": "#5b6676",
        "gray-04": "#515c6c",
        "gray-05": "#353d4b",
        "gray-06": "#262f3e",
        "gray-07": "#181d24",
        "gray-08": "#151825",
      },
    },
  },
  plugins: [],
};
