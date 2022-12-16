
import { React , useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ( {presupuesto, setpresupuesto,
  setisvalidpresupuesto }) => {
  
  const [ mensaje , setmensaje ] = useState('')


  const handlepresupuesto = (e) => {

    e.preventDefault()

    console.log('enviando formulario')

    if(!presupuesto || presupuesto  < 0 )
    {
     setmensaje('No es presupuesto valido')
     return 
    }
    setmensaje('')
    setisvalidpresupuesto(true)

  }
  
  return (
    <div className='contenedor-presupuesto contenedor sombra'>

  <form className='formulario'
   onSubmit={handlepresupuesto}
  >
    <div className='campo'>
         <label > Definir Presupueto</label>

         <input className='nuevo-presupuesto' type="number"
         placeholder='Agregar presupuesto'
         value={presupuesto}
         onChange={(e) => setpresupuesto( Number( e.target.value) ) }
         />
    </div>

    <input type="submit" value="Agregar" />

    { mensaje  && <Mensaje tipo="error">{mensaje}</Mensaje > }

  </form>

    </div>
  )
}

export default NuevoPresupuesto