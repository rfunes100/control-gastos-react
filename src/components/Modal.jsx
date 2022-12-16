
import React, { useState, useEffect } from 'react'
import Cerrarbtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ( {setmodal , 
    setanimarmodal, animarmodal,
    guardargasto ,
     gastoeditar ,
     setgastoeditar
    }) => {

    const [nombre, setnombre] = useState('')
    const [cantidad, setcantidad] = useState(0)
    const [categoria, setcategoria] = useState('')
    const [ mensaje , setmensaje ] = useState('')
    const [id , setid]= useState('')
    const { fecha , setFecha } = useState('')



useEffect(() => {
  

  return () => {
    console.log(gastoeditar, 'fechas')
    if( Object.keys(gastoeditar).length > 0 )
    {
      setnombre(gastoeditar.nombre)
      setcantidad(gastoeditar.cantidad)
      setcategoria(gastoeditar.categoria)
      setid( gastoeditar.id)
    //  setFecha(gastoeditar.fecha.toString())
      console.log(  gastoeditar.fecha.toString())

    }

    
  }
}, [])



    const handlesubmit = (e )=> {
        e.preventDefault()

        if([nombre , cantidad,  categoria].includes(''))
        {
            setmensaje('todos los campos son obligatorios')

         setTimeout(() => {
            setmensaje('')
         }, 500);
            return
        }

        guardargasto ({nombre , cantidad, categoria, id , fecha})
    //  setmensaje('')

    }

   

const ocultarmodal = () => {
   
    setanimarmodal(false)
    setgastoeditar({})


    setTimeout(() => {
        setmodal(false)
    
      }, 500);

}

  return (
    <div className=' modal'>

        <div className=' cerrar-modal'>
        <img src={Cerrarbtn} alt="Cerrar Modal" 
        onClick={ocultarmodal}
        />

        </div>

<form 
 onSubmit={handlesubmit}
className={`formulario ${animarmodal ? "animar" : "cerrar"}` } action="">
<legend>{gastoeditar.nombre ? 'Editar gasto' : 'Nuevo Gasto'}</legend>
{ mensaje&& <Mensaje tipo='error'>{mensaje}</Mensaje>}

<div className=' campo'>
    <label htmlFor="nombre">Nombre Gasto</label>

<input 
 id='nombre'
 value={nombre}
 onChange={ e => setnombre(e.target.value)}

type="text" placeholder='Agregar gasto' />

</div>

<div className='campo'>
    <label htmlFor="cantidad">Cantidad</label>

<input 
 id='cantidad'
 value={cantidad}
 onChange={ e => setcantidad(e.target.value)}
type="number" placeholder='Agregar cantidad' />

</div>

<div className='campo'>
    <label htmlFor="categoria">Categoria</label>

<select name="" id="categoria"
 value={categoria}
 onChange={ e => setcategoria(e.target.value)}
>
    <option value="">--Seleccione -</option>
    <option value="ahorro">Ahorros</option>
    <option value="casa">Casa</option>
    <option value="gastos">Gastos</option>
    <option value="ocio">Ocio</option>
    <option value="salud">Salud</option>
    <option value="suscripciones">Suscripciones</option>

</select>

</div>

<input type="submit" value=
{gastoeditar.nombre ? 'Guardar cambios' : 'Agregar Gasto'}
/>
</form>


    </div>
  )
}

export default Modal