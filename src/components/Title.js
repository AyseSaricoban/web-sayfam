import React from "react";

function SectionTitle({ children, id }) {
  return (
    <h1
      id={id && id}
      className="      text-3xl
      font-bold
      mb-5
      text-indigo-600
        dark:text-indigo-600 flex-auto md:text-md"
    >
      {children}
    </h1>
  );
}

export default SectionTitle;
