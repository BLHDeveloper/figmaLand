import React from "react";

const SubHeading = ({ paragraph }) => {
  return (
    <p className="text-white/70 text-center text-lg sm:text-xl font-['font-regular'] font-normal leading-relaxed tracking-[0.2px] max-w-[600px]">
      {paragraph}
    </p>
  );
};

export default SubHeading;
