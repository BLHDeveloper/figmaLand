import React from "react";

const Link = ({ href, text, className = "" }) => {
  return (
    <a
      href={href}
      className={`inline-block py-1.5 px-2.5 transition-opacity duration-200 hover:opacity-70 ${className}`}
    >
      {text}
    </a>
  );
};

export default Link;
