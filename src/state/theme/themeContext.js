import React, { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext("light");

const useTheme = () => useContext(themeContext);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const updateTheme = () => {
    console.log("clicked");
    setTheme((prev) => {
      if (prev === "light") {
        localStorage.setItem("theme", "dark");
        return "dark";
      } else {
        localStorage.setItem("theme", "light");
        return "light";
      }
    });
  };

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  return (
    <themeContext.Provider value={{ theme, updateTheme }}>
      {" "}
      {children}{" "}
    </themeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
