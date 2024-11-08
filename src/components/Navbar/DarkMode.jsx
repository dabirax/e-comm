import { useEffect, useState } from "react";

import darkMode from "../../assets/darkMode.gif";
import lightMode from "../../assets/lightMode.jpg";

const DarkMode = () => {
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  const [theme, setTheme] = useState(null);

  const element = document.documentElement;
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);
  const HandleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="relative">
      <img
        src={lightMode}
        alt=""
        className={`w-12 h-8 cursor-pointer absolute right-0  ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        onClick={HandleTheme}
      />
      <img
        src={darkMode}
        alt=""
        className={`w-12 h-8 cursor-pointer`}
        onClick={HandleTheme}
      />
    </div>
  );
};
export default DarkMode;
