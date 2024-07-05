import { useState } from 'react';

import ListarTodos from './FormListarClientes.js';
import FormBusqueda from './FormBusquedaCliente.js';
import FormEliminar from './FormEliminarCliente.js';
import FormCarga from './FormCargaCliente.js';
import './App.css';

function App() {
  const[showForm1,setShowForm1]=useState(false)
  const[showForm2,setShowForm2]=useState(false)
  const[showForm3,setShowForm3]=useState(false)



  return (
    <div className="App bg-dark">
      <h1 className='text-light p-5 text-center'>Busqueda, Carga y Borrado de Clientes de la Agenda</h1>

      <ListarTodos/>
                
      <section className='py-5 d-flex flex-column aling-items-center justify-content-center px-3 bg-success my-5 mx-2'>
        <h2 className='text-center'>Busqueda Cliente por Apellido</h2>
        <button className='btn btn-lg btn-danger' onClick={()=>{setShowForm1(!showForm1)}}>
          Buscar Cliente 
          <i className="bi bi-arrow-down-short"></i></button>
          {showForm1?
            <FormBusqueda/>   
          :
          ""
          }
          
      </section>

      <section className='py-5 d-flex flex-column aling-items-center px-3 bg-info my-5 mx-2'>
        <h2 className='text-center'>Carga de Clientes por Apellido</h2>
        <button className='btn btn-lg btn-warning' onClick={()=>{setShowForm2(!showForm2)}}>
          Cargar Cliente 
          <i className="bi bi-arrow-down-short"></i></button>
          {showForm2?
            <FormCarga/>  
            :""
          }
         
      </section>



      <section className='py-5 d-flex flex-column aling-items-center px-3 bg-info my-5 mx-2'>
        <h2 className='text-center'>Eliminar Cliente por Apellido  </h2>
        <button className='btn btn-lg btn-warning' onClick={()=>{setShowForm3(!showForm3)}}>
          Eliminar Cliente 
          <i className="bi bi-arrow-down-short"></i></button>
          {showForm3?
            <FormEliminar/>  
            :""
          }
         
      </section>
      

      <section className='my-5 p-5'>
          <h2 className='text-light p-2 text-center'>Agenda Clientes</h2>
      </section>
    </div>
  );
}

export default App;
