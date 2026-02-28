export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       extend: {
         keyframes: {
           fadeSlideIn: {
             from: { opacity: "0", transform: "translateY(10px)" },
              to:   { opacity: "1", transform: "translateY(0)" },
            },
          },
         animation: {
            fadeSlideIn: "fadeSlideIn 0.35s ease",
         },
        },
      },
  plugins: [],
}
