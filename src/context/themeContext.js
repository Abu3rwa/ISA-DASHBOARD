import React, { createContext, useState } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// Create a ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  state = {
    isLight: true,
    light: {},
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
