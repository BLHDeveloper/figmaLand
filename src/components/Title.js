import React from "react";

const Title = ({ title, className = "" }) => {
  return <h3 className={className}>{title}</h3>;
};

export default Title;
