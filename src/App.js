import classNames from "classnames";
import './App.styles.css';
import {  useContext, useState } from 'react';
import CardMovie from './Components/CardMovie';
import ThemeSwitch from './Components/ThemeSwitch';
import {ThemeContext} from './Components/ThemeProvider';
import { valueDarkTheme, valueWhiteTheme } from "./constants";

const debounce = (delay) => {
  let timerId = null;
  
  return (callback) => {
      if (timerId) clearTimeout(timerId);

       timerId = setTimeout(() => {
          callback();
          clearTimeout(timerId);
      }, delay);
  };
};

const debounceChange = debounce(1000)



const apiKey = `3639d7f7`

function App() {
  const [loading, setLoading] = useState()
  const [movie,setMovie]=useState('');
  const [listMovies, setListMovies] = useState([]);
  const themeContext = useContext(ThemeContext);

  const appClass = classNames("App", {
    "App-dark": themeContext.theme === valueDarkTheme,
    "App-white": themeContext.theme === valueWhiteTheme
  });

   const appTitleClass = classNames("App_title", {
    "App_title-dark": themeContext.theme === valueDarkTheme,
    "App_title-white": themeContext.theme === valueWhiteTheme
  });

   const appWrapperInput =classNames("App_wrapperInput", {
    "App_wrapperInput-dark": themeContext.theme === valueDarkTheme,
    "App_wrapperInput-white": themeContext.theme === valueWhiteTheme
  });
          
   const changeHandler =  async (value) => {
    setLoading(true)
    try {
    const response =  await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${value}`, { method: 'GET'})
    const data = await response.json()
    data.Response === 'True' ? setListMovies(data.Search) : setListMovies([]) 
   }

   catch {
     setListMovies([])
   }
    finally { 
      setLoading(false)
    }
  }

  return ( 
    <div className={appClass}>
      <div className="App_header">
        <ThemeSwitch/>
        <h1 className={appTitleClass}>
          Find your  <span className='App_titleContrast'> favourite </span> movie.
        </h1>
        <div className={appWrapperInput}>
          <input className="App__input" onChange={(e)=> debounceChange(()=>{
            changeHandler(e.target.value)
          })}/>
        </div>
      </div>
      <div className="App_wrapperMovies">
        {loading && <p className="App_wrapperMoviesStatus">Загрузка...</p>}
        {!loading && !listMovies.length  && <p className="App_wrapperMoviesStatus">Фильмы не найдены</p>}
        {!loading && !!listMovies.length && 
          <div className="App_listMovies">
            {listMovies.map((movie)=> <CardMovie {...movie} key={movie.imdbID}/> )}
          </div>
        }
      </div>
     </div>
  );
}
export default App;
