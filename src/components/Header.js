import React from "react";
import { useTheme } from "../state/stateIndex";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import styles from "../styles/Header.module.css";
const Header = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <header
      className={`${styles.header_} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h1 className={styles.header_title}>Pomodora-App</h1>
      <p className={styles.theme_} onClick={updateTheme}>
        {theme === "dark" ? (
          <RiMoonClearFill className={styles.moon} />
        ) : (
          <BsFillSunFill className={styles.sun} />
        )}
      </p>
    </header>
  );
};

export { Header };
