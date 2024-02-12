import { createContext, useState } from "react";
const style = { backgroundColor: "#1a1625" };
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? style : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContext.displayName = "ThemeContext";
