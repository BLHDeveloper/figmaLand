import React from "react";

const Button = ({ text, variant = "primary", className = "" }) => {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3.5 font-['font-med'] text-[17px] leading-[25px] tracking-[0.2px] text-white transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const variants = {
    primary:
      "bg-[var(--accent)] rounded-[var(--radius-sm)] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] hover:bg-[var(--accent-hover)] hover:shadow-[0_8px_30px_var(--accent-glow)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-transparent rounded-[var(--radius-sm)] border border-white/30 hover:border-white/70 hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
