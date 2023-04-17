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
  // class 브라우저 다크모드 설정을 따르지 않음, parents에 "dark" class 지정 필요
  // media 브라우저 다크모드 설정을 따름
  darkMode:"media",
  plugins: [],
}
