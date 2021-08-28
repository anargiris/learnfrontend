import React from "react";
import styles from "../styles/Background.module.css";

const html = () => {
  return (
    <>
      <div className={styles.background}>
        <main className="max-w-5xl mx-auto">
          <h1 className="text-5xl leading-10 tracking-wider text-center font-bold font-mont text-yellow-primary">
            HTML
          </h1>

          <h2 className="font-open leading-9 my-2 text-lg text-gray-900 text-center">
            HTML or HyperText Markup Language, is the standard markup language
            for documents who are meant to be displayed by a web browser.
          </h2>
          <p className="font-open leading-8 text-gray-800 text-center">
            It's the first thing you should look into your journey. HTML is
            basically a set of instructions given to the browser. Let's look
            some basic examples.
          </p>
          <pre className="mt-4">
            <code className="p-4 block w-1/2 mx-auto border border-gray-900 bg-gray-100">
              &#x3C;h1&#x3E; This is a heading &#x3C;h1/&#x3E; <br />
              &#x3C;p&#x3E; This is a paragraph &#x3C;p/&#x3E;
            </code>
          </pre>
        </main>
      </div>
    </>
  );
};

export default html;
