import React from 'react';
import '../Navbar/Navbar.css';
import '../CarWidget/CarWidget.css';
import { CarWidget } from '../CarWidget/CarWidget';
import logo from '../../assets/logoo.png';
import {styles} from '../Navbar/Navbar.style'
import {style} from '../CarWidget/CarWidget.style';


export const Navbar = ({ nombreUsuario,apellidoUsuario }) => {
 
  return (
    <header style={styles.container}>
      <nav  style={styles.nav}>
        <img style={styles.logo} src={logo} alt='Tienda Elizabeth'/>
       
     
        <ul style={styles.categorias}>
          <li > <a style={styles.enlaces} href=''>Mujer</a></li>
          <li > <a style={styles.enlaces} href=''>Hombre</a></li>
          <li > <a style={styles.enlaces} href=''>Ofertas</a></li>

        </ul>
        <h1  style={styles.usuario}>Bienvenido {nombreUsuario} {apellidoUsuario}</h1>
      
        <ul style={style.carrito}><CarWidget/></ul>
      
      </nav>
      
  
        
    </header>
  )
}

export default Navbar


