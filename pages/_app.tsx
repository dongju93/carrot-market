import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // recap 실습 시 style 미적용
    // <div className="">
    <div className="w-full max-w-xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
