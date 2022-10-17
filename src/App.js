 import React from "react";
 import './App.css';
 import Navbar from './Componentes/Navbar/Navbar';
 import ItemListContainer from './Componentes/Containers/ItemListContainer'; 
/*  import ComponentesEstados from './ComponentesEstados'; */



const App = () =>{
  const nombre = "Elizabeth";
  const mensaje = "Mi Tienda Online"; 
  return (
    <>
     <Navbar nombreUsuario={nombre} apellidoUsuario="ChavestF"/>
    <ItemListContainer greeting={mensaje} /> 
  {/*   <ComponentesEstados/> */}
    
    </>
);
}
export default App




