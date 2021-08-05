import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Whatsthis from "../components/Whatsthis";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Whatsthis />
    </motion.div>
  );
}
