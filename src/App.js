import './App.scss';
import './styles/setup.scss';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Page from './components/Pages/Index';
import Dark from './img/dark.png';
import Light from './img/light.png';
import { HashRouter } from "react-router-dom";

function App() {
  let [theme, setTheme] = useState(true);
  let background = {
    backgroundImage: `${theme ? 'radial-gradient(#2e4632, #2d2d2d)' : 'radial-gradient(#ffffff, #e3e3e3)'}`
  }
  return (
    <div className="App" style={background}>
      <HashRouter>
        <Header theme={theme}/>
        <Page theme={theme}/>
      </HashRouter>
      <button className={theme ? "themeSelector dark": "themeSelector light"} 
              onClick={() => setTheme(!theme)}
              title="Modo oscuro / claro">
        <img src={theme ? Light : Dark} alt="Theme Selector"/>
      </button>
    </div>
  );
}

export default App;
