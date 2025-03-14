import {useContext} from "react";
import './CardMovie.styles.css';
import {ThemeContext } from "./ThemeProvider";
import {valueDarkTheme, valueWhiteTheme } from "../constants";
import classNames from "classnames";

export default function CardMovie(props){ 
    
 const themeContext = useContext(ThemeContext);

 const cardMovie =classNames("CardMovies", {
     "CardMovies-dark": themeContext.theme === valueDarkTheme,
     "CardMovies-white": themeContext.theme === valueWhiteTheme
   });

   const cardMovie_img =classNames("Card_movieImg", {
    "Card_movieImg-dark": themeContext.theme === valueDarkTheme,
    "Card_movieImg-white": themeContext.theme === valueWhiteTheme
  });

  const cardMovie_nameTitle =classNames("cardMovie_info", {
    "cardMovie_info-dark": themeContext.theme === valueDarkTheme,
    "cardMovie_info-white": themeContext.theme === valueWhiteTheme
  });
    return(
        <div className={cardMovie}>
            <div className="cardMovie_wrapperImg">
              <img src={props.Poster}  className={cardMovie_img}  alt="изображение фильма" />
            </div>
            <div className={cardMovie_nameTitle}>
             <p className='cardMovie_titleMovie'> {props.Title}</p>
             <p className='cardMovie_yearsMoveie'>{props.Year}</p>  
            </div> 
        </div>
    )

}