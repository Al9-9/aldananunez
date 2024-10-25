import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
           <ul className='links'>
            <li className="link" >Inicio</li>
            <li className="link" >Mi trabajo</li>
            <li className="link" >Contacto</li>
            <li className="link" >Sobre mí</li>
          </ul></nav>
         
      </header>
      <main>
<Portfolio/>
      </main>
    </div>
  );
}

export default App;
