import {React , useEffect , useState } from 'react'

import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar'
import   'react-circular-progressbar/dist/styles.css'

const ControlPresupesto = ( { presupuesto , gastos,
    setgastos ,
    setpresupuesto,
    setisvalidpresupuesto

 }) => {

const [disponible, setdisponible] = useState(0)
const [gastado, setgastado] = useState(0)
const [ porcentaje , setporcentaje ] = useState(0)



useEffect(() => {
    const totalgastado = gastos.reduce(( total ,gasto ) => Number( total) + Number( gasto.cantidad) ,0)
    

    const totaldiposnible =   presupuesto - totalgastado 

  const nuevoporcentaje =( ((  presupuesto - totaldiposnible ) / presupuesto ) * 100 ).toFixed(2)    //  / presupuesto ) * 100 )

      setgastado(totalgastado)
      setdisponible(totaldiposnible)

      
   setTimeout(() => {
    setporcentaje(nuevoporcentaje)
   }, 1500);

  return () => {
    const totalgastado = gastos.reduce(( total ,gasto ) =>  Number( total) + Number(gasto.cantidad) , 0)

    const totaldiposnible =  presupuesto -totalgastado  ;

  setgastado( totalgastado )
  setdisponible(totaldiposnible)

  }
}, [gastos])




    const formatearcantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency', 
            currency: 'USD'
        })

    }

    const handleresetapp = () =>
    {
       const resultado = confirm('deseas reiniciar presupesto y gasto?')
       if(resultado){
        setgastos([])
        setpresupuesto(0)
        setisvalidpresupuesto(false)


       }
       else{

       }


    }

  return (
 

  
            <div className=' contenedor-presupuesto contenedor
            sombra dos-columnas'>
                
                <div>
                   <CircularProgressbar
                   styles= { buildStyles({
                     pathColor:  porcentaje > 100 ? '#DC2626': '#3B82F6' ,
                     trailColor: ' #F5F5F5',
                     textColor:porcentaje > 100 ? '#DC2626': '#3B82F6'
                   })}
                   value={porcentaje}
                   text={`${porcentaje}% Gastado`}
                   >
                    </CircularProgressbar>
                </div>

                <div className=' contenido-presupuesto'>

                <button className=' reset-app'
                 type=' button'
                 onClick={handleresetapp}
                > 
                     Resetear App
                </button>

                    <p>
                        <span>Presupuesto:</span>  { formatearcantidad(presupuesto) }
                        </p>

                        <p className= {`${disponible < 0 ? 'negativo' : '' }`}>
                        <span>Disponible:</span>  { formatearcantidad(disponible) }
                        </p>

                        <p>
                        <span>Gastado:</span>  { formatearcantidad(gastado ) }
                        </p>
                </div>
            </div>
   

  )
}

export default ControlPresupesto