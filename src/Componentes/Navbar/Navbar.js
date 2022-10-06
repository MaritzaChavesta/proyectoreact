import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoo.png'
import {styles} from './Navbar.style'


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
        
    

       
      </nav>

      
        
    </header>
  )
}

export default Navbar

