import { motion } from "framer-motion";

const AnimatedDots = () => {
  const parent = {
    jump: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    jump: {
      y: 0,
      transition: {
        type: "spring",
      },
    },
    hidden: { y: 50 },
  };

  return (
    <motion.div
      variants={parent}
      animate="jump"
      initial="hidden"
      className="flex absolute bottom-0 right-0"
    >
      <motion.div
        variants={item}
        className="w-4 h-4 bg-yellow-secondary"
      ></motion.div>
      <motion.div
        variants={item}
        className="w-4 h-4 bg-blue-strong"
      ></motion.div>
      <motion.div
        variants={item}
        className="w-4 h-4 bg-blue-primary"
      ></motion.div>
    </motion.div>
  );
};

export default AnimatedDots;
