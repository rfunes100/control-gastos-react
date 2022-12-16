import {useState, useEffect} from 'react'



const Filtros = ( { Filtro, setfiltro}) => {
  return (
    <div className='filtros sombra contenedor'>

        <form action="">

            <div className=' campo'>
                <label htmlFor="">Filtrar gasto</label>

                <select 
          value={Filtro}
         onChange={ e => setfiltro( e.target.value)}
          
       
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
        </form>

    </div>
  )
}

export default Filtros