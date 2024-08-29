import React from "react";

function Input({ label, placeholder }) {
  return (
    <>
      {!!label && (
        <p className="text-white text-[14px] font-medium text-left w-full mb-1">
          {label}
        </p>
      )}
      <input
        placeholder={placeholder}
        type="text"
        className="w-full h-[50px] rounded-[12px] px-[20px] py-[12px] text-white bg-[#ffffff12] mb-4 outline-none"
      />
    </>
  );
}

export default Input;
