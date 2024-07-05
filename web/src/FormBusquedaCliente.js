export default function FormBusqueda() {

    const handlerSearch=(event)=>{
        event.preventDefault();//manipular el envio
        fetch("http://localhost:4200/buscar/cliente/"+ event.target[0].value)
        .then((resp)=>{return resp.json()})
        .then((info)=>{console.log(info);})
        .catch(err=>console.log(err))
    };

    return (
        <form onSubmit={(event)=>handlerSearch(event)}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="nombre" aria-describedby="nombre alumno"/>
            </div>

            <button type="submit" className="btn btn-primary">Buscar Cliente</button>

            
        </form>
    )
}