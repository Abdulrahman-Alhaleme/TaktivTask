/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxsm: "375px",
        xsm: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        //$primary
        primary_1: "#6363fc",
        primary_2: "#ececff",
        primary_3: "#f2f3f7",
        primary_4: "#ffffff",
        //secondary
        secondary_1: "#d682fd",
        secondary_2: "#8282fd",
        secondary_3: "#82e7fd",
        secondary_4: "#26b44e",
        secondary_5: "#ff7549",
        secondary_6: "#ffc149",
        secondary_7: "#dadaff",
        secondary_8: "#f3daff",
        secondary_9: "#cdf5fe",
        //grayscale
        grayscale_1: "#241f5c",
        grayscale_2: "#4d497b",
        grayscale_3: "#75748b",
        grayscale_4: "#d3d2da",
        grayscale_5: "#ececf1",
      },
      fontSize: {
        "custom-xs": "0.8125rem",
        // 13px / 16px
        "custom-sm": "0.875rem",
        // 14px / 16px
        "custom-base": "0.9375rem",
        // 15px / 16px
        "custom-lg": "1rem",
        // 16px / 16px
        "custom-xl": "1.125rem",
        // 18px / 16px
        "custom-2xl": "1.25rem",
        // 20px / 16px
        "custom-3xl": "1.5rem",
        // 24px / 16px
        "custom-4xl": "1.75rem",
        // 28px / 16px
        "custom-5xl": "2.5rem",
        // 40px / 16px
        "custom-6xl": "3rem",
        // 48px / 16px
        "custom-7xl": "4rem",
        // 64px / 16px
        "custom-8xl": "6rem",
        // 96px / 16px
      },
      lineHeight: {
        "custom-20": "0.5",
        // 20px / 16px = 0.5
        "custom-24": "0.625",
        // 24px / 16px = 0.625
        "custom-30": "0.75",
        // 30px / 16px = 0.75
        "custom-40": "1",
        // 40px / 16px = 1
        "custom-56": "1.4",
        // 56px / 16px = 1.4
        "custom-80": "2",
        // 80px / 16px = 2
        "custom-112": "3.5",
        // 112px / 16px = 3.5
      },
      fontWeight: {
        "custom-semi-bold": 600,
        // Font weight for "semiBold" //font-semi-bold
        "custom-medium": 500,
        // Font weight for "medium" //font-medium
        "custom-regular": 400,
        // Font weight for "Regular" (Tailwind uses 400 as the default) //font-regular
      },
    },
  },
  plugins: [],
};