import React, {useState} from 'react'

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([{nombre:'Maritza'},{nombre:'Elizabeth'}]);

    const [nombre, setNombre] = useState("")
    const Elizabeth = {nombre:'Leandra'};


     const agregarElizabeth = () => {
       /*  setUsuarios ([...usuarios, Elizabeth]); */
       setUsuarios([...usuarios,{nombre}])
     }
     const manejarAgregar = (e) => {
        setNombre(e.target.value);
     }
  return (
    <div>
        <h1>Usuarios</h1>
        <button onClick={agregarElizabeth}>Agregar a Elizabeth</button>
        {
            usuarios.map((usuario,indice)=>{
                return <h1 key={indice}>{usuario.nombre}</h1>
            })
        }
        <input onChange={manejarAgregar} type="text"/>
        
    
    </div>
  )
}
