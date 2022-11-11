 import React from "react";
 import './App.css';
 import Navbar from './Componentes/Navbar/Navbar';
 import {ItemListContainer} from './Containers/ItemListContainer/ItemListContainer/ItemListContainer'; 
 import {Usuarios} from './Usuarios';
/* import { useState } from 'react'; */




const App = () =>{
  const nombre = "Elizabeth";
  /* const mensaje = "Mi Tienda Online";  */
  return (
    <>
     <Navbar nombreUsuario={nombre} apellidoUsuario="ChavestF"/>
    {/*  <ItemListContainer greeting={mensaje} />  */}
   
     <Usuarios/>
    
    
    </>
);
}
export default App




