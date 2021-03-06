import React from "react";
import { motion } from "framer-motion";
import SectionCard from "./SectionCard";

const IntroductionCards = () => {
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
      transition: {
        type: "spring",
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      variants={list}
      animate="visible"
      initial="hidden"
      className="flex justify-center pb-4 items-center mt-5 gap-10 flex-wrap bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <motion.div variants={item}>
        <SectionCard
          title="HTML"
          desc="The first thing you need to learn in your road to success. Define paragraphs, headings and images that your browser understands. Learn how Google reads websites."
          color="yellow-500"
        />
      </motion.div>
      <motion.div variants={item}>
        <SectionCard
          title="CSS"
          desc="Our browser understands our content. Now it's time to change their colors, width and maybe even animate them! CSS helps you bring life to your websites."
          color="blue-600"
        />
      </motion.div>
      <motion.div variants={item}>
        <SectionCard
          title="JavaScript"
          desc="With JavaScript we add interactivity, advanced functionality and logic to our applications. That's where things start to get exciting! Learn the basics and little more.."
          color="yellow-400"
        />
      </motion.div>
      <motion.div variants={item}>
        <SectionCard
          title="React"
          desc="By coming this far, you have the basic knowledge and the willingness to continue. React is a 'Javascript library' that helps build your projects faster and efficiently."
          color="indigo-500"
        />
      </motion.div>
      <motion.div variants={item}>
        <SectionCard
          title="Tailwind"
          desc="We are going to help ourselves with the design of our websites. After we have good understanding of CSS, Tailwind's gonna make everything smoother, while saving us time."
          color="blue-300"
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroductionCards;
