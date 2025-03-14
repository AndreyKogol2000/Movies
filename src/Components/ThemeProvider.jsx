import { createContext, useContext, useState } from "react";
import { valueDarkTheme, keyTheme, valueWhiteTheme } from "../constants";

function getDefaultTheme (){ 
    const localStorageTheme = localStorage.getItem(keyTheme);

    if (!localStorageTheme)  return valueWhiteTheme;

    if(localStorageTheme === valueDarkTheme || localStorageTheme === valueWhiteTheme ) 
    return localStorageTheme;
    
    return valueWhiteTheme;
}
 
export const ThemeContext = createContext();

export default  function ThemeProvider(props){ 
    const[theme,setTheme] =useState(getDefaultTheme());

    function setNewTheme() { 
        const newTheme = theme === valueDarkTheme ? valueWhiteTheme : valueDarkTheme;

        setTheme(newTheme);
     
        localStorage.setItem(keyTheme, newTheme);
    }
    
    return (    
       <ThemeContext.Provider value={{theme, setNewTheme}}>
        {props.children}
       </ThemeContext.Provider>
     )
 
}