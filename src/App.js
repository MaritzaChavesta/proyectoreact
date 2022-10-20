 import React from "react";
 import './App.css';
 import Navbar from './Componentes/Navbar/Navbar';
 import {ItemListContainer} from './Containers/ItemListContainer';
 import {Usuarios} from './Usuarios';




const App = () =>{
  const nombre = "Elizabeth";
  const mensaje = "Mi Tienda Online"; 
  return (
    <>
     <Navbar nombreUsuario={nombre} apellidoUsuario="ChavestF"/>
     <ItemListContainer greeting={mensaje} /> 
     <Usuarios/>

    
    </>
);
}
export default App




