export default function ListarTodos(){
    
    const handlerListar=(event)=>{
        event.preventDefault();
    fetch("http://localhost:4200/cargar/clientes")
    .then((resp)=>{return resp.json()})
    .then((info)=>{console.log(info.info)})
    .catch(err=>console.log(err))
  ;
    }
    return (
        <form onSubmit={(event)=>handlerListar(event)}>
            <h2>Listar a todos lo Clientes</h2>
            <button type="submit" className='btn btn-lg btn-danger w-100' onClick={ListarTodos}>
             Listado de Todos los Clientes 
            </button>
        </form>
    )
}