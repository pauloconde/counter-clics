import logo from './images/logo_arete.png';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const incrementarContador = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <header className="logo-contenedor">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <div className='contenedor-principal'>
        <Contador 
          numClics = {numClics}
        />
        <Boton
          texto='Incrementar'
          tipoClic={true}
          manejarClic={incrementarContador} />
        <Boton
          texto='Reiniciar'
          tipoClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
