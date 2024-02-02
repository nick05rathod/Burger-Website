import React from "react";
import darkpng from "../assets/image/moon.png";
import lightpng from "../assets/image/sun.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <img
        src={theme === "light" ? darkpng : lightpng}
        alt="image"
        onClick={changeTheme}
        className="w-6 cursor-pointer"
      />
    </div>
  );
};

export default Darkmode;
