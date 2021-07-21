import React, { useState  } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import './App.css';

export const ThemeContext = React.createContext();

function App() {
  
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="App" >
      <ThemeContext.Provider value={darkTheme}>
         <button onClick={toggleTheme}>Toggle Theme</button>
         <FunctionContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
