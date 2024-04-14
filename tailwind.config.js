/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./views/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "375px",
         md: "768px",
        lg: "976px",
        xl: "1440px",
        ds: "1920px",
        dm: "2480px",
        dl: "2700px",
      },
      colors: {
        bookingGreen: "#006C33",
        bookingDimGreen: "#004822",
        bookingGrey: "#C8CCD0",
        bookingGray: "#4D5154",
        bookingBlack: "#004822",
        inDark: "#212529",
      },
      boxShadow: {
        "3xl": "0px 4px 10px rgba(0, 0, 0, 0.08)",
        "sum": "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
        "premium": "3px -2px 8px 0px rgba(0, 0, 0, 0.08)",
        "4xl": "0px 2.73377px 5.46753px rgba(0, 0, 0, 0.16)",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
  plugins: [],
};
