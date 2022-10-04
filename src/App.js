 import React from "react";
 import './App.css';
 import Navbar from './Componentes/Header/Navbar'


const App = () =>{
  const nombre = "Elizabeth";
  return (
    <>
     <Navbar nombreUsuario={nombre} apellidoUsuario="ChavestF"/>

    </>
) ;
}
export default App




