import React from 'react';
import './App.css';
import Forecast from "./components/forecast/forecast.js";
import Logo from './components/logo/logo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <h1>React Weather App</h1>

      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by yournamehere
      </footer>
    </div>
  );
}

export default App;
