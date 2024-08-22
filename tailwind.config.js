/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FFD2F3",
        lightBlue: "#F2F3F4",
        purple: "#CEB9FF",
        blue: {
          0: "#5C00FF",
          100: "#030043",
          200: "#190053",
        },
        gray: {
          0: "#E4E4E4",
          100: "#616161",
        },
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 5px;",
      },
    },
  },
  plugins: [],
};
