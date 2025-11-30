/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // ⭐ This is where the safelist goes
  safelist: [
    // MiniCard responsive grid
    "grid-cols-2",
    "sm:grid-cols-3",
    "md:grid-cols-4",
    "lg:grid-cols-5",

    // CharacterInfoCard responsive layout
    "md:flex-row",
    "w-full",
    "md:w-[258px]",
    "aspect-[258/366]",
    "rounded-[6px]",

    // MiniCard sizes
    "min-w-[150px]",
    "min-h-[186px]",
  ],
  
  theme: {
    extend: {
      colors: {
        primaryText: "#372D20",
        bodyText: "#312F2B",
        pageBg: "#FDFBF7",
      },
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Gentium Basic", "serif"],
      },
      fontWeight: {
        heading: "500",
        body: "400",
      },
      fontSize: {
        h1: ["42px", { lineHeight: "51px" }],
        h2: ["33px", { lineHeight: "39px" }],
        h3: ["27px", { lineHeight: "33px" }],
        h4: ["24px", { lineHeight: "27px" }],
        h5: ["21px", { lineHeight: "24px" }],
        h6: ["18px", { lineHeight: "21px" }],

        "h1-md": ["48px", { lineHeight: "57px" }],
        "h1-lg": ["56px", { lineHeight: "64px" }],
        "h2-md": ["38px", { lineHeight: "44px" }],
        "h2-lg": ["44px", { lineHeight: "50px" }],
        "h3-md": ["30px", { lineHeight: "36px" }],
        "h3-lg": ["34px", { lineHeight: "40px" }],
        "h4-md": ["26px", { lineHeight: "30px" }],
        "h4-lg": ["28px", { lineHeight: "33px" }],
        "h5-md": ["22px", { lineHeight: "26px" }],
        "h5-lg": ["24px", { lineHeight: "28px" }],
        "h6-md": ["19px", { lineHeight: "22px" }],
        "h6-lg": ["20px", { lineHeight: "24px" }],

        body: ["18px", { lineHeight: "21px" }],
        "body-s": ["12px", { lineHeight: "15px" }],
        caption: ["12px", { lineHeight: "15px" }],
      },

      spacing: {
        "paragraph-h1": "51px",
        "paragraph-h2": "39px",
        "paragraph-h3": "33px",
        "paragraph-h4": "27px",
        "paragraph-h5": "24px",
        "paragraph-h6": "21px",
        "paragraph-body": "21px",
        "paragraph-body-s": "15px",
        "paragraph-caption": "15px",
        "section-gap": "36px",
      },

      inset: {
        "right-page": "calc((100vw - var(--page-max-width)) / 2 + 21px)",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};


