import React from "react";
import { useTheme } from "../state/stateIndex";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { theme, updateTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header
      className={`${styles.header_} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h1 onClick={() => navigate("/")} className={styles.header_title}>
        Pomodora-App
      </h1>
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
