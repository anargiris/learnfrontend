import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Whatsthis = () => {
  return (
    <section id="whatsthis" className="font-mont border-t-4 border-blue-strong">
      <h3 className="text-4xl text-white uppercase bg-blue-primary py-5 text-center font-bold">
        Become a frontend developer
      </h3>
      <div className="flex justify-between">
        <div className="p-10 flex-1 relative">
          <div className="text-blue-strong font-open shadow-lg border-l border-t border-r border-blue-strong border-opacity-10 rounded-sm p-5 relative bg-white">
            <span
              className="absolute bg-blue-secondary w-full h-full transform rotate-3"
              style={{ zIndex: -1 }}
            ></span>
            <h4 className="font-mont text-lg font-bold leading-10 mb-1">
              <span className="text-yellow-primary tracking-wide">
                LearnFrontEnd
              </span>{" "}
              is an opinionated roadmap.
            </h4>
            <p className="mb-2">
              It will help you understand what it takes to become a frontend
              developer in the modern era, following certain steps. It is NOT a
              crash course.
            </p>
            <p className="mb-4">
              Learning web development nowadays can be chaotic. There's
              different paths to choose and a lot of ways to build
              apps/websites.
            </p>
            <p className="font-bold leading-10 tracking-wide font-mont">
              That's why most people give up...
            </p>
            <p className="mb-6">
              ...the reason this website was built. It will give you a clear
              path to follow and save you from the frustration and hour-wasting
              thinking of what's the best tool to learn next.
            </p>
            <p className=" tracking-wide opacity-80">
              Save yourself from the hassle..
            </p>
          </div>
          <span className="h-40 w-40 bg-yellow-secondary absolute -right-4 flex justify-center opacity-50"></span>
        </div>
        <div className="flex-1 text-blue-strong py-5 text-center">
          <div className="flex h-full flex-col justify-center items-center">
            <span className="text-4xl font-bold">
              DON'T GET LOST IN THE COUNTLESS COURSES AND FRAMEWORKS.
            </span>
            <div className="w-1/2 mx-auto h-1 bg-yellow-secondary my-5"></div>
            <p className="text-xl mb-10">
              Follow a path that's led many to success.
            </p>
            <div className="flex justify-center items-center">
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                className="bg-yellow-secondary shadow-lg text-white p-5
           rounded-lg"
              >
                Start now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatsthis;
