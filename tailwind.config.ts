/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1225px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'bottom-black': '5px 5px 0px 0px rgba(0, 0, 0, 1)',
        'right-bottom-black': '5px 5px 0px 0px rgba(0,0,0,1)' // Shadow only at the bottom, solid black
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateX(0%)",
            transformOrigin: "50% 50%",
          },
          "15%": { transform: "translateX(-6px) rotate(-6deg)" },
          "30%": { transform: "translateX(9px) rotate(6deg)" },
          "45%": { transform: "translateX(-9px) rotate(-3.6deg)" },
          "60%": { transform: "translateX(3px) rotate(2.4deg)" },
          "75%": { transform: "translateX(-2px) rotate(-1.2deg)" },
        },
        cloud: {
          "0%": {
            transform: "translateX(-10vw)",
          },
          "100%": { transform: "translateX(105vw)" },
        },
        cloud2: {
          "0%": {
            transform: "translateX(-15vw)",
          },
          "100%": { transform: "translateX(110vw)" },
        },
        cloudMobile: {
          "0%": {
            transform: "translateX(-100vw)",
          },
          "100%": { transform: "translateX(155vw)" },
        },
        move: {
          "0%": {
            transform: "translateX(-1000px)",
          },
          "100%": { transform: "translateX(2000px)" },
        },
        move2: {
          "0%": {
            transform: "translateX(-1000px)",
          },
          "100%": { transform: "translateX(2200px)" },
        },
        move3: {
          "0%": {
            transform: "translateX(120vw)",
          },
          "100%": { transform: "translateX(-50vw)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.8s both",
        move: "move 15s ease-in-out infinite alternate",
        move2: "move2 20s ease-in-out infinite alternate",
        move3: "move3 17s ease-in-out infinite alternate",
        cloud: "cloud 180s ease-in-out infinite",
        cloud2: "cloud2 190s ease-in-out infinite",
        cloud3: "cloud 200s ease-in-out infinite",
        cloudMobile1: "cloudMobile 80s ease-in-out infinite",
        cloudMobile2: "cloudMobile 90s ease-in-out infinite",
        cloudMobile3: "cloudMobile 100s ease-in-out infinite",
      },
    },

  },
  plugins: [require("tailwindcss-animate")],
};
