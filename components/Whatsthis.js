import React from "react";
import Image from "next/image";

const Whatsthis = () => {
  return (
    <section
      id="whatsthis"
      className="h-screen font-mont border-t-4 border-blue-strong"
    >
      <h3 className="text-4xl text-white uppercase bg-blue-primary py-5 text-center font-bold">
        Become a frontend developer
      </h3>
      <div className="flex justify-between">
        <div className="p-10 flex-1">
          <div className="border border-gray-300 shadow-sm rounded-sm p-5">
            <h4 className="text-blue-strong font-mont text-lg font-bold leading-10 mb-1">
              <span className="text-yellow-primary tracking-wide">
                LearnFrontEnd
              </span>{" "}
              is an opinionated roadmap.
            </h4>
            <p className="text-blue-strong font-open">
              It will help you understand what it takes to become a frontend
              developer in the modern era, following certain steps.
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default Whatsthis;
