import React from "react";

function Button({ className, variant, title, disabled, onClick }) {
  const btnClasses =
    variant === "primary"
      ? "primary-btn"
      : variant === "danger"
      ? "bg-[#DB605C]"
      : "bg-[#ffffff]";

  const textClasses =
    variant === "primary"
      ? "text-white"
      : variant === "danger"
      ? "text-white"
      : "text-[#111111]";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-[100px] h-[42px] w-full ${btnClasses} ${
        disabled && "opacity-50 cursor-not-allowed"
      } ${className}`}
    >
      <p className={`${textClasses} text-[14px]`}>{title}</p>
    </button>
  );
}

export default Button;
