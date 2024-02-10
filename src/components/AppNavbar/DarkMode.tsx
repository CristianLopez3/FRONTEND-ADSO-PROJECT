import { useEffect, useState } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const mode = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

const stylesDark =
  "w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10";

const styleslight =
  "w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300";

export default function DarkMode() {
  const [theme, setTheme] = useState(mode);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="relative ">
        <img
          // src={theme === "dark" ? darkPng : lightPng}
          src={lightPng}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className={`${stylesDark}  ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `}
        />
        <img
          src={darkPng}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className={styleslight}
        />
      </div>
    </>
  );
}
