import { motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import IntroductionCards from "../components/IntroductionCards";
import Link from "next/link";
import EinsteinQuote from "../components/EinsteinQuote";

const introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="text-blue-strong font-open">
        <h1 className="text-5xl font-bold font-mont text-center uppercase leading-relaxed mb-5">
          <span className="text-blue-primary font-black ">Learn</span>
          <span className="text-yellow-primary font-black ">Front</span>
          <span className="text-blue-strong font-black ">End</span> -
          Introduction
        </h1>
        <h2 className="text-center text-2xl mb-10 text-gray-700">
          You are about to get started with gaining the knowledge and mindset to
          become a frontend developer.
        </h2>
        <p className="text-center">
          Before we do, let's take a quick overview of what we are going to
          cover.
        </p>
        <div className="flex justify-center items-center mt-4">
          <Image src="/down.svg" width={50} height={50} />
        </div>

        <IntroductionCards />
        <section className="mt-10 w-full overflow-hidden">
          <h3 className="text-center text-3xl font-bold font-mont mb-10">
            Remember that learning front end{" "}
            <span className="text-yellow-primary">TAKES TIME</span>.
          </h3>
          <div className="w-full flex justify-between">
            <div className="p-2 flex justify-center items-center">
              <div>
                <p className="text-md px-10 text-blue-strong text-center font-open">
                  The most useful advice is to take it slow and steady. Don't
                  rush through things, it's better to spend some time to
                  understand the concepts. Try new things and learn from your
                  mistakes.
                </p>
                <div className="w-20 my-5 rounded-sm mx-auto h-1 bg-yellow-secondary"></div>
                <EinsteinQuote />
              </div>
            </div>
            <div className="rounded-full overflow-hidden transform skew-x-1">
              <Image src="/coding.jpg" width={1200} height={900} />
            </div>
          </div>
        </section>
        <section className="mt-20 text-center py-10 bg-gradient-to-t from-linear-start to-linear-end">
          <h4 className="text-4xl mb-10 font-bold font-mont">
            Start with <span className="text-yellow-primary">HTML</span>
          </h4>
          <Link href="/html">
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="bg-yellow-primary mx-auto text-2xl shadow-lg w-28 cursor-pointer p-2 rounded-lg text-white font-bold my-4"
            >
              Let's go!
            </motion.div>
          </Link>
        </section>
      </main>
    </motion.div>
  );
};

export default introduction;
