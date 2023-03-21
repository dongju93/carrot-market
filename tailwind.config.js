/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Tailwindcss가 사용될 경로를 지정
    // pages, components 경로 아래 모든폴더, 모든 파일 및 아래 특정한 확장자
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
