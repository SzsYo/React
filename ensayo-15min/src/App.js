import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Ejemplo de componentes en React.
        </p>
      </header>
      <PrimerComponente />
      <br />
      <br />
      <SegundoComponente />
    </div>
  );
}

export default App;
