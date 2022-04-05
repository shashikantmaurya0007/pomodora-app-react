import React from "react";

import { Header, ToDoListTable } from "../components/componentIndex";
import { useTheme } from "../state/stateIndex";
import styles from "../styles/Header.module.css";
const LandingPage = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" && styles.dark}`}>
      <Header />
      <ToDoListTable />
    </div>
  );
};

export { LandingPage };
