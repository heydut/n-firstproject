import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Light mode" : "Dark Mode";
  return (
    <div>
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>

      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: inherit;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </div>
  );
};

export default ThemeSwitch;
