import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Whatsthis from "../components/Whatsthis";

export default function Home() {
  return (
    <>
      <motion.div exit={{ opacity: 0 }}>
        <Hero />
        <Whatsthis />
      </motion.div>
    </>
  );
}
