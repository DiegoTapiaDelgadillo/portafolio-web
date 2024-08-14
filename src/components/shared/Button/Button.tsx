import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className=" p-6 border rounded-xl text-xl bg-black text-900 border-black text-white hover:bg-neutral-800 ease-in-out duration-300">
      {children}
    </button>
  );
};
