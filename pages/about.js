import { motion } from "framer-motion";
import React from "react";

const about = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <h1 className="text-blue-secondary">About Paage</h1>
    </motion.div>
  );
};

export default about;
