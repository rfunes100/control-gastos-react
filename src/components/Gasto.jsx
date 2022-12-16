import React from 'react'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
   
   } from 'react-swipeable-list'
   
   import 'react-swipeable-list/dist/styles.css'


import {formatearfecha } from '../helpers'

const diccionarioiconos = {

    ahorro        : IconoAhorro,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud ,
    suscripciones: IconoSuscripciones

}

const Gasto = ( {gasto , setgastoeditar, eliminargasto }) => {

    const { categoria, nombre, cantidad , id, fecha } = gasto


  

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => setgastoeditar(gasto)}>
            Editar
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
           
            onClick={() =>  eliminargasto(id)}
            destructive={true}
          >
            Eliminar
          </SwipeAction>
        </TrailingActions>
      );

  return (
    <SwipeableList>
    <SwipeableListItem
     leadingActions={leadingActions()}
     trailingActions={trailingActions()}
    >

    <div className=' gasto sombra'>
        <div className=' contenido-gasto'>
            
            <img src={diccionarioiconos[categoria]} alt="icono Gasto" 
            />




            <div className=' descripcion-gasto'>
                 <p className=' categoria'>
                    {categoria}
                 </p>

                 <p className=' nombre-gasto'>
                    {nombre}
                 </p>

                 
                 <p className=' fecha-gasto'>
                    Agregado el: {''}
                    <span>{formatearfecha(fecha)}</span>
                 </p>

             
            </div>
           

        </div>
        <p className=' cantidad-gasto'>
                    ${cantidad}
                 </p>
         
         </div>
         </SwipeableListItem>
  
  </SwipeableList>

  )
}

export default Gasto