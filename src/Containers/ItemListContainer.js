import React from 'react'
import ItemCount from '../Componentes/ItemCount/ItemCount'

export const ItemListContainer = ({greeting}) => {
  const onAdd = (count) =>{
    console.log(`El usuario quiere agregar ${count}productos`);
  }
  return (
    <>
    <h1>Bienvenido{greeting} </h1>
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer