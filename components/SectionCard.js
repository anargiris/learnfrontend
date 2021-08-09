import React from "react";

const SectionCard = ({ title, desc, color }) => {
  return (
    <div className="shadow-lg w-56 rounded-sm overflow-hidden">
      <div
        className={`p-4 text-center font-bold text-gray-900 shadow-sm bg-${color} text-lg bg-opacity-80`}
      >
        {title}
      </div>
      <div className="px-2 py-4">
        <p className="text-md text-gray-700">{desc}</p>
      </div>
    </div>
  );
};

export default SectionCard;
