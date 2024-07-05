export default function FormEliminar() {

    const handlerEliminar=(event)=>{
        event.preventDefault();//manipular el envio
        fetch("http://localhost:4200/borrar/cliente/"+ event.target[0].value, {
            method: 'DELETE'
        })
        .then((resp)=>{return resp.json()})
        .then((info)=>{console.log(info);})
        .catch(err=>console.log(err))
    };

    return (
        <form onSubmit={(event)=>handlerEliminar(event)}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="nombre" aria-describedby="nombre alumno"/>
            </div>

            <button type="submit" className="btn btn-primary">Eliminar Cliente</button>

            
        </form>
    )
}