import {createContext, useState } from "react";
import { styles } from "../settings/ThemeSettings";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState("purple");
  let currentStyle = styles[theme];
  console.log("testtttttttttttttttttttttt : " , styles[theme]);
  
  return <ThemeContext.Provider value={{theme,setTheme,currentStyle}}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
