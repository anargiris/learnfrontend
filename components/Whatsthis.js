import React from "react";
import Image from "next/image";

const Whatsthis = () => {
  return (
    <section id="whatsthis" className="h-screen font-mont">
      <h3 className="text-4xl text-yellow-secondary text-center font-bold">
        Become a frontend developer
      </h3>
      <p className="text-blue-strong">
        LearnFrontEnd is an opinionated roadmap.
      </p>
      <Image src="/coding.svg" width={400} height={400} />
    </section>
  );
};

export default Whatsthis;
