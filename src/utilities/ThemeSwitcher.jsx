import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import darkmode from "../assets/darkmode.svg";
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <img src={darkmode} alt="dark/light toggle icon" onClick={handleThemeChange} />;
};
