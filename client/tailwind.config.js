/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      xlsm: { min: "0px", max: "450px" },
    },
    extend: {
      colors: {
        linkedin: "#2867B2",
        twitter: "#1DA1F2",
        facebook: "#4267B2",
        instagram: "#e95950",
        back: "#2F3E46",
        lgreen: "#84A98C",
        bubble: "#4fc3dc",
        bubble1: "#ff2d75",
        custom: {
          accent: withOpacity("--color-accent"),
          secondary: withOpacity("--color-secondary"),
          dark: withOpacity("--color-dark"),
          light: withOpacity("--color-light"),
          nav: "#CAD2C5",
        },
      }, //usage: text-custom-accent
      backgroundColor: {
        custom: {
          accent: withOpacity("--bg-accent"),
          dark: withOpacity("--bg-dark"),
          light: withOpacity("--bg-light"),
          secondary: withOpacity("--bg-secondary"),
        },
      }, //usage: bg-custom-dark
      borderColor: {
        custom: {
          accent: withOpacity("--border-accent"),
          primary: withOpacity("--border-primary"),
          secondary: withOpacity("--border-secondary"),
        },
      }, //usage: border-custom-primary

      keyframes: {
        animate: {
          "0%": {
            transform: "translateY(95vh) scale(0)",
          },

          "100%": {
            tranform: "translateY(-20vh) scale(1)",
          },
        },
      },

      animation: {
        linear_bubble: "animate 20s linear infinite;",
      },
    },
  },
  plugins: [],
};
