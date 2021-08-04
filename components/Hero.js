import Navbar from "./Navbar";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className={`${styles.background} h-screen`}>
      <Navbar />
      <h1
        className={`text-7xl text-center font-bold font-mont leading-relaxed text-blue-primary`}
      >
        LEARN <span className="bg-blue-primary text-white px-4">FRONTEND</span>
      </h1>

      <h2 className="font-open text-gray-800 text-center text-xl">
        Roadmap, information and resources to kickstart your journey to become a
        web developer!
      </h2>
      <div className="font-mont flex items-center justify-center gap-5 mt-40">
        <motion.button
          whileHover={{ y: -5, transition: "spring" }}
          className="p-2 text-xl rounded-md bg-yellow-primary shadow-md"
        >
          Get started
        </motion.button>
        <motion.button
          whileHover={{ y: -5, transition: "spring" }}
          className="p-2 text-xl bg-white text-yellow-secondary shadow-md rounded-md "
        >
          What's this?
        </motion.button>
      </div>
    </header>
  );
};

export default Hero;
