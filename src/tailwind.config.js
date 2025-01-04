// remember to use module.exports instead of tailwind.config in production
tailwind.config = {
  // Note: config only includes the used styles & variables of your selection
  content: ["./src/**/*.{html,vue,svelte,js,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-up": "fadeInUp 1s ease-in-out forwards",
        "slide-in-left": "slideInLeft 1s ease-in-out forwards",
        "slide-in-right": "slideInRight 1s ease-in-out forwards",
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        alex: ['"Alex Brush"', "cursive"],
        outfit: ["Outfit", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
      borderRadius: {},
      colors: {
        "01": "#741349",
        "03": "#ffffff",
        "02": "#7f7f7f",
        "04": "#333333",
        "05": "#FFEDF8",
        "06": "#8A5974",
        "07": "#EED7E6",
        "08": "#F8F8F8",
        "09": "#C7C7C7",
        "010": "#5F5F5F",
        "011": "#F0C9E0",
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
};
