import { motion } from "framer-motion";

const HeroList = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
    hidden: { opacity: 0, x: 50 },
  };

  return (
    <div className=" flex justify-center items-center font-mont mb-20">
      <motion.ul
        variants={list}
        animate="visible"
        initial="hidden"
        className="text-black flex gap-5"
      >
        <motion.li variants={item}>HTML</motion.li>
        <motion.li variants={item}>CSS</motion.li>
        <motion.li variants={item}>JavaScript</motion.li>
        <motion.li variants={item}>Frameworks</motion.li>
        <motion.li variants={item}>Links</motion.li>
      </motion.ul>
    </div>
  );
};

export default HeroList;
