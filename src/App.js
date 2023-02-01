import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './src/DarkMode.css';

function App() {
  // USING useState
  const [theme , setTheme ] = useState('light')

  //FUNCTION - TO TOGGLE THEME 
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    } else {
      setTheme('light');
    }
   };

   //useEffect 
   useEffect(() => {
    document.body.className = theme;
   },[theme]);

  return (
    //Dynamically adding classname
    <div className={`app ${theme}`}>
      <header className="App-header">
      <button onClick={toggleTheme}>TOGGGLE</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>

    </div>
  );
}

export default App;
