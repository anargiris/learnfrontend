import React from "react";
import { motion } from "framer-motion";

const SectionCard = ({ title, desc, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      className="shadow-lg w-56 rounded-sm overflow-hidden bg-white cursor-pointer"
    >
      <div
        className={`p-4 text-center font-bold text-gray-800 shadow-sm bg-${color} text-lg bg-opacity-90`}
      >
        {title}
      </div>
      <div className="px-2 py-4">
        <p className="text-md text-gray-700">{desc}</p>
      </div>
    </motion.div>
  );
};

export default SectionCard;
