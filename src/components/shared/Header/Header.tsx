"use client";
import { BurgerSvg } from "./BurgerSvg";
import { CloseSvg } from "./CloseSvg";
import { useState } from "react";

interface HeaderProps {
  navLinks: Array<{ to: string; text: string }>;
}

export const Header = ({ navLinks }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className=" flex w-full bg-white dark:bg-black justify-between items-center px-4 py-8 sm:px-8 md:px-16 lg:px-36 fixed z-50 ">
        <a
          className=" text-black dark:text-white font-bold md:text-xl lg:text-3xl "
          href="#Home"
        >
          Diego Tapia
        </a>
        <ul className=" gap-8 hidden sm:flex">
          {navLinks.map((link, index) => (
            <li
              className=" dark:text-white text-xl hover:text-neutral-500 dark:hover:text-white/50 ease-in-out duration-300 cursor-pointer"
              key={index}
            >
              <a href={link.to}>{link.text}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={handleOpen}
          className=" border border-neutral-500 dark:border-white p-1 rounded-md block sm:hidden cursor-pointer dark:hover:bg-neutral-800 ease-in-out duration-300"
        >
          {isOpen ? <CloseSvg /> : <BurgerSvg />}
        </button>
      </nav>
      {isOpen ? (
        <div className="bg-white dark:bg-black px-4 sm:px-8 md:px-16 lg:px-36 pt-28 pb-4 sm:hidden block animate-fade-down z-40 fixed w-full">
          <ul className=" grid gap-2">
            {navLinks.map((link, index) => (
              <li
                className=" text-black dark:text-white text-xl hover:text-neutral-500 dark:hover:text-white/50 ease-in-out duration-300 cursor-pointer"
                key={index}
                onClick={handleOpen}
              >
                <a href={link.to}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};
