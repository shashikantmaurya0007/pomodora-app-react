import React from "react";
import { useTheme } from "../state/stateIndex";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
const Header = () => {
  const { theme, updateTheme } = useTheme();
  return (
    <header className={``}>
      <button onClick={updateTheme}>
        {theme === "dark" ? <RiMoonClearFill /> : <BsFillSunFill />}
      </button>
    </header>
  );
};

export { Header };
