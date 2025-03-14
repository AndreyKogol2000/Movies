import {useContext} from "react";
import './ThemeSwitch.styles.css'
import {ThemeContext } from "./ThemeProvider";
import {valueDarkTheme, valueWhiteTheme } from "../constants";
import classNames from "classnames";

export default function ThemeSwitch(){
 const themeContext = useContext(ThemeContext);

  const switchClass = classNames("Switch", {
     "Switch-dark": themeContext.theme === valueDarkTheme,
     "Switch-white": themeContext.theme === valueWhiteTheme
   });
      
   const switchRoundClass = classNames("Switch_round", {
    "Switch_round-dark": themeContext.theme === valueDarkTheme,
    "Switch_round-white": themeContext.theme === valueWhiteTheme
  });
     
  const switchTextClass = classNames("Switch_text", {
    "Switch_text-dark": themeContext.theme === valueDarkTheme,
    "Switch_text-white": themeContext.theme === valueWhiteTheme
  });
     
   const switchBoxClass = classNames("Switch_box", {
    "Switch_box-dark": themeContext.theme === valueDarkTheme,
    "Switch_box-white": themeContext.theme === valueWhiteTheme
  });


    return ( 
      <label className={switchClass} htmlFor='Switch'>
        <div className={switchBoxClass}>
          <input type='checkbox'  id ='Switch' className="Switch_checkbox"
          checked= {themeContext.theme === valueDarkTheme  } 
          onClick={themeContext.setNewTheme} />
          <span className={switchRoundClass} />
        </div>
        <span className={switchTextClass}>Switch Theme</span>
      </label>
    )
}