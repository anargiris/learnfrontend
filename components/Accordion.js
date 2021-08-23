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
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-secondary bg-opacity-40 cursor-pointer font-open border-l-2 border-yellow-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="text-gray-800 font-mont font-bold ml-1">
            {question}
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            layout
            key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
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
