/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "desktop": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "laptop": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "l-phone": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "m-phone": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "s-phone": { max: "620px" },
        // => @media (max-width: 620px) { ... }
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        section: {
          maxWidth: "700px",
          margin: "0 auto 72px",
          padding: "0 16px",
          
        },
      });
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
};
