/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#372D20",   // Heading color
        bodyText: "#312F2B",      // Body/copy color
        pageBg: "#FDFBF7",        // Page background
      },
      fontFamily: {
        heading: ["Lora", "serif"],      // For H1-H6
        body: ["Gentium Basic", "serif"], // For body/copy
      },
      fontSize: {
        // Mobile first headings
        h1: ["42px", { lineHeight: "51px" }],
        h2: ["33px", { lineHeight: "39px" }],
        h3: ["27px", { lineHeight: "33px" }],
        h4: ["24px", { lineHeight: "27px" }],
        h5: ["21px", { lineHeight: "24px" }],
        h6: ["18px", { lineHeight: "21px" }],

        // Responsive headings
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

        // Body text
        "body-l": ["18px", { lineHeight: "21px" }],
        body: ["15px", { lineHeight: "18px" }],
        "body-s": ["12px", { lineHeight: "15px" }],
        caption: ["12px", { lineHeight: "15px" }],
      },
      spacing: {
        // Paragraph spacing
        "paragraph-h1": "51px",
        "paragraph-h2": "39px",
        "paragraph-h3": "33px",
        "paragraph-h4": "27px",
        "paragraph-h5": "24px",
        "paragraph-h6": "21px",
        "paragraph-body-l": "21px",
        "paragraph-body": "18px",
        "paragraph-body-s": "15px",
        "paragraph-caption": "15px",
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

