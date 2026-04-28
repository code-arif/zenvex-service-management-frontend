export default {
  // Scan all JSX files in the src folder for Tailwind class names
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {}, // No custom theme needed for this project
  },
  plugins: [],
};
