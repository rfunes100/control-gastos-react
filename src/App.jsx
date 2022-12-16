import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import icononuevogasto from './img/nuevo-gasto.svg'

import { generaid } from './helpers'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'


function App() {

  const [presupuesto, setpresupuesto] = useState(

   Number(  localStorage.getItem('presupuesto'?? 0 )) 
  )
 const [ isvalidpresupuesto , setisvalidpresupuesto] = useState(false)
const [modal , setmodal ] = useState(false)
const [animarmodal , setanimarmodal ] = useState(false)
const [gastos , setgastos] = useState(
  localStorage.getItem('gastos')?  JSON.parse( localStorage.getItem('gastos')) : [] 
  
  )
const [gastoeditar , setgastoeditar] = useState({})
const [ filtro , setfiltro] = useState('')
const [ gastofiltrado , setgastofiltrado ] = useState([])



 useEffect(() => {
   
  if( Object.keys(gastoeditar).length > 0 )
  {
      setmodal(true)
   
    
      setTimeout(() => {
        setanimarmodal(true)
    
      }, 500);
  }
  

  
 
   return () => {
    if( Object.keys(gastoeditar).length > 0 )
    {
      setmodal(true)
  
    
    
      setTimeout(() => {
        setanimarmodal(true)
    
      }, 500);
    }
   }
 }, [gastoeditar])
 

 
 useEffect(() => {
    
  localStorage.setItem('presupuesto', presupuesto ?? 0)
  
  return () => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
    
  }
}, [presupuesto])

useEffect(() => {
  const presupuestols =Number( localStorage.getItem('presupuesto')) ?? 0 

  if(presupuestols > 0)
  {
     setisvalidpresupuesto(true)
  }


  return () => {
    const presupuestols =Number( localStorage.getItem('presupuesto')) ?? 0 

    if(presupuestols > 0)
    {
       setisvalidpresupuesto(true)
    }

    
  }
}, [])


useEffect(() => {
    
  localStorage.setItem('gastos', JSON.stringify( gastos) ?? [])
  
  return () => {
    localStorage.setItem('gastos', JSON.stringify( gastos) ?? [])
    
    
  }
}, [gastos])


useEffect(() => {
    
  localStorage.setItem('filtro', filtro ?? 0)
  
  if( filtro )
  {

const gastofiltrado = gastos.filter( gasto => gasto.categoria
      === filtro )
    //  console.log('gastofiltrado', gastofiltrado)
      
      setgastofiltrado(gastofiltrado)
  }



  return () => {
    
  localStorage.setItem('filtro', filtro ?? 0)

     if( filtro )
     {

 const gastofiltrado = gastos.filter( gasto => gasto.categoria
         === filtro )
      //   console.log('gastofiltrado', gastofiltrado)
      setgastofiltrado(gastofiltrado)

     }





  }
}, [filtro])



const guardargasto =  (gasto) =>
{

  if(gasto.id )
  {
    gasto.fecha = Date.now()
    const gastoacutliazado = gastos.map( gastostate => gastostate.id 
      === gasto.id ? gasto : gastostate )
      setgastos(gastoacutliazado)
      setgastoeditar({})
  }
  else{
    gasto.id =generaid()
    gasto.fecha = Date.now()
    setgastos([...gastos , gasto])

  }
  console.log('gastos nuevos', gastos)
  setanimarmodal(false)

  setTimeout(() => {
   
    setmodal(false)
  }, 500);

  
}

 const handleNuevoGasto = () => {
  setmodal(true)
  setgastoeditar({})

  setTimeout(() => {
    setanimarmodal(true)

  }, 500);
 }


 const eliminargasto = id => {
  // console.log('eliminando ', id)

   const gastosactactualizados = gastos.filter( gasto => gasto.id !== id)

   console.log('gastosactactualizados',gastosactactualizados)

   setgastos(gastosactactualizados)

}


  return (

    <div className={ modal ?'fijar' : '' }>
       <Header
       gastos={gastos}
       setgastos={setgastos}
       presupuesto={presupuesto}
       setpresupuesto={setpresupuesto}
       isvalidpresupuesto={isvalidpresupuesto}
       setisvalidpresupuesto={setisvalidpresupuesto}
       >

</Header>

{isvalidpresupuesto && (
  <>
  <main>

     <Filtros
      filtro= {filtro}
      setfiltro={setfiltro}
     >

     </Filtros>
    <ListadoGastos
    gastos={gastos}
    setgastoeditar={setgastoeditar}
    eliminargasto={eliminargasto}
    filtro={filtro}
    gastofiltrado={gastofiltrado}

    >

    </ListadoGastos>
  </main>
  
 <div  className=' nuevo-gasto'>
 <img src={ icononuevogasto} alt="icono nuevo gasto" 
  onClick={handleNuevoGasto}
 />

</div>
</>

) }

{modal &&  (
        <Modal
        setmodal={setmodal}
        setanimarmodal={setanimarmodal}
        animarmodal={animarmodal}
        guardargasto={guardargasto}
        gastoeditar={gastoeditar}
        setgastoeditar= {setgastoeditar}
      ></Modal>

)}

    </div>
   
  )
}

export default App
