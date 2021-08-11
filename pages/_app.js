import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AnimateSharedLayout } from "framer-motion";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <Navbar />
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
