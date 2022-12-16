import React from 'react'
import ControlPresupesto from './ControlPresupesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ( {presupuesto, 
  setpresupuesto , 
  isvalidpresupuesto, setisvalidpresupuesto,
  gastos,
  setgastos  

}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

{isvalidpresupuesto ? (
   <ControlPresupesto
   presupuesto={presupuesto}
   gastos={gastos}
   setgastos={setgastos}
   setpresupuesto={setpresupuesto}
   setisvalidpresupuesto={setisvalidpresupuesto}
   ></ControlPresupesto>
) :(
  <NuevoPresupuesto
  presupuesto={presupuesto}
  setpresupuesto={setpresupuesto}
  setisvalidpresupuesto={setisvalidpresupuesto}
  

>
    
</NuevoPresupuesto>

) }
      
    </header>
  )
}

export default Header