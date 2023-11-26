import React, { useState, useEffect } from 'react';
import dog from "../assets/dog.png";
import duck from "../assets/duck.png";
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const [makeBlur, setMakeBlur] = useState(false);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 100;

    setMakeBlur(scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 px-8 md:px-16 bg-white dark:bg-black shadow-md dark:border-b dark:border-gray-700 z-50 ${makeBlur ? 'backdrop-blur-md bg-opacity-80 border-b' : ''}`}>
      <div className="flex items-center">
        <img src={dog} alt="logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white" />
        <p className='text-3xl md:text-5xl text-purple-600 font-extrabold'>PetGen.ai</p>
      </div>
      <ul className="flex items-center">
        <li className="flex items-center">
          {theme === "dark" ? (
            <IoMoonOutline className='mr-3 md:mr-5 text-2xl md:text-3xl cursor-pointer dark:text-white' onClick={handleThemeSwitch} />
          ) : (
            <LuSunMedium className='mr-3 md:mr-5 text-2xl md:text-3xl cursor-pointer' onClick={handleThemeSwitch} />
          )}
          <img src={duck} alt="Duck" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;