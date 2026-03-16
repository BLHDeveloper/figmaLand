import React from "react";

const Paragraph = ({ paragraph, className = "" }) => {
  return (
    <p className={`text-base leading-relaxed ${className}`}>{paragraph}</p>
  );
};

export default Paragraph;
