/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        "nice-green": "#ceedce",
        "nice-purple": "#7738aa",
      },
      borderColor: {
        "nice-green": "#82a082",
      },
    },
  },
  plugins: [],
};
