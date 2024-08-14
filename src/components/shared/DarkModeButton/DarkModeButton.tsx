"use client";
import { MoonSvg } from "@/components/svg/MoonSvg";
import { SunSvg } from "@/components/svg/SunSvg";
import { useEffect, useState } from "react";
export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className=" fixed bottom-4 right-4 p-4 rounded-xl shadow-xl z-40 border-2 border-neutral-500 bg-black hover:bg-neutral-900 ease-in-out duration-300 "
      onClick={toggleDarkMode}
    >
      {darkMode ? <MoonSvg /> : <SunSvg />}
    </button>
  );
};
