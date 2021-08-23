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
      <section className="h-screen flex flex-col items-center relative bg-yellow-secondary bg-opacity-5">
        <div className="absolute left-0 flex items-center justify-center h-full flex-col">
          <div className="h-4 w-4 bg-yellow-secondary"></div>
          <div className="h-4 w-4 bg-blue-secondary"></div>
          <div className="h-4 w-4 bg-blue-strong"></div>
        </div>
        <div className="absolute right-0 flex items-center justify-center h-full flex-col">
          <div className="h-4 w-4 bg-blue-strong"></div>
          <div className="h-4 w-4 bg-blue-secondary"></div>
          <div className="h-4 w-4 bg-yellow-secondary"></div>
        </div>
        <AnimateSharedLayout>
          <Accordion
            question="What will I learn from this website?"
            answer="You will understand what it takes to become a frontend developer as well as having a clear idea of what steps to follow to make it."
          />
          <Accordion
            question="How long will it take me?"
            answer="It depends on how fast you learn and your willingness to practise. Some people are good already in 6 months, others take longer."
          />
          <Accordion />
        </AnimateSharedLayout>
      </section>
    </motion.div>
  );
}
