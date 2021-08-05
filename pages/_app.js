import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
