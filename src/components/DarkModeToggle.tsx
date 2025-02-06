"use client";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  return (
    <button onClick={toggleTheme} className="ml-4 px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-md">
      {theme === "light" ? "🌙" : "☀"}
    </button>
  );
};

export default DarkModeToggle;
