import React from "react";

const html = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl leading-10 tracking-wider text-center font-bold font-mont text-yellow-primary">
          HTML
        </h1>
        <h2 className="font-open">
          HTML or HyperText Markup Language, is the standard markup language for
          documents who are meant to be displayed by a web browser.
        </h2>
        <p>
          It's the first thing you should look into your journey. HTML is
          basically a set of instructions given to the browser. Let's look some
          basic examples.
        </p>
        <pre>
          <code className="p-10 border border-gray-900 bg-gray-100">
            &#x3C;h1&#x3E; This is a heading &#x3C;h1/&#x3E;
          </code>
        </pre>
      </div>
    </>
  );
};

export default html;
