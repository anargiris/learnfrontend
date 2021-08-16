import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div layout className="w-1/3 mb-4">
      <AnimatePresence>
        <motion.div
          key="question"
          layout
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-indigo-100 cursor-pointer font-open"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="text-gray-900">{question}</motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            layout
            key="answer"
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ y: -10, opacity: 0 }}
            className="p-2 font-open text-lg text-gray-700 border-l border-b border-gray-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
