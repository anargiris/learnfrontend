import { motion } from "framer-motion";
import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
import Whatsthis from "../components/Whatsthis";
import { AnimateSharedLayout } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Whatsthis />
      <section className="h-screen flex flex-col items-center">
        <AnimateSharedLayout>
          <Accordion
            question="What will I get from this website?"
            answer="You will understand what it takes to become a frontend developer as well as having a clear idea of what steps to follow to make it."
          />
          <Accordion />
          <Accordion />
        </AnimateSharedLayout>
      </section>
    </motion.div>
  );
}
