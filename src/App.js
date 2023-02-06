import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './DarkMode.css';

function App() {
  
  let body = document.body;

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

   //useEffect !
   useEffect(() => {
    document.body.className = theme;
   },[theme]);

  return (

    //Dynamically adding classname
    <div className={`app ${theme}`}>
      <header className={`App-header ${theme}`}>
      <button className={`aaa`} onClick={toggleTheme}>TOGGGLE</button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
