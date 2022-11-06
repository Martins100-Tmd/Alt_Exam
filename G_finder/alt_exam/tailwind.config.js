/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rob: ["Poppins"],
      },
      width: {
        95: ["95%"],
        20: ["20%"],
        45: ["45%"],
        55: ["55%"],
      },
      fontSize: {
        10: ["10px"],
      },
    },
  },
  plugins: [],
};
