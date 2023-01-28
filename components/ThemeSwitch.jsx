import { useState } from "react";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const text = darkMode ? "Light mode" : "Dark Mode";
  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>

      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ThemeSwitch;
