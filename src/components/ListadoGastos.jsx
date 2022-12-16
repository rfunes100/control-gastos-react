import React, { Fragment } from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setgastoeditar, eliminargasto,
    filtro,
    gastofiltrado
}) => {
  return (
    <div className=' listado-gastos contenedor'>


{
  filtro ? (
    <>
    <h2>{gastofiltrado.length? 'gastos': 'no hay gasto en esta categoria'}</h2>

    {
     gastofiltrado.map( gasto => (
        <Gasto
         key={gasto.id}
         gasto={gasto}
         setgastoeditar={setgastoeditar}
         eliminargasto={eliminargasto}
        ></Gasto>

        ))

     }
        </>  
  ) :
  (

    <>
    {

        gastos.map( gasto => (
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setgastoeditar={setgastoeditar}
            eliminargasto={eliminargasto}
            ></Gasto>
        ))
     }
    </>

  ) 

}






    </div>
  )
}

export default ListadoGastos