import Navbar from "./Navbar";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";
import HeroList from "./HeroList";
import Link from "next/link";
import AnimatedDots from "./AnimatedDots";

const Hero = () => {
  return (
    <header className={`${styles.background} h-screen relative`}>
      <h1
        className={`text-7xl mb-10 text-center font-bold font-mont leading-relaxed text-blue-primary ${styles.title}`}
      >
        LEARN <span className="bg-blue-primary text-white px-4">FRONTEND</span>
      </h1>

      <h2 className="font-open font-bold text-gray-800 text-center text-xl mb-20">
        Roadmap, information and resources to kickstart your journey to become a
        web developer!
      </h2>

      <HeroList />
      <div className="font-mont flex items-center justify-center gap-5">
        <Link href="/introduction">
          <motion.button
            whileHover={{ y: -5, transition: "spring" }}
            className="p-2 text-xl rounded-md bg-yellow-primary shadow-md"
          >
            Get started
          </motion.button>
        </Link>
        <Link href="#whatsthis">
          <motion.button
            whileHover={{ y: -5, transition: "spring" }}
            className="p-2 text-xl bg-white text-yellow-secondary shadow-md rounded-md "
          >
            What's this?
          </motion.button>
        </Link>
      </div>
      <AnimatedDots />
    </header>
  );
};

export default Hero;
