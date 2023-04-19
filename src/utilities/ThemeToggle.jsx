import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <img
      className="w-10 h-10"
      src={theme === "light" ? light : dark}
      alt="dark/light toggle icon"
      onClick={handleThemeChange}
    />
  );
};
