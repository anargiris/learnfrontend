import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center mt-20 relative z-20">
      <div className="bg-indigo-200" onClick={() => setIsOpen(!isOpen)}>
        paragraph
      </div>
      {isOpen && <div>hidden stuff</div>}
    </div>
  );
};

export default Accordion;
