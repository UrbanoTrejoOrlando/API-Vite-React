import React, { useState } from 'react'
import Header from './Header';
import Tareas from './Tareas';
import Formulario from './Formulario';

const App = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1)
  }
  return (
    <>
    <Header/>
    <Formulario/>
    <Tareas/>
    </>
  );
}

export default App;

// 
// Borrar la carpeta assets/ 
// Borrar el archivo App.css
// Borrar el archivo Index.css
// Eliminar una linea del main.jsx
