export default function FormCarga() {

    const handlerCreate=(event)=>{
        event.preventDefault();
        const data = {
            apellido: event.target.apellido.value,
            nombre: event.target.nombre.value,
            telefono: event.target.telefono.value,
            email: event.target.email.value
        };

        fetch("http://localhost:4200/agregar/cliente", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((resp)=>{return resp.json()})
        .then((info)=>{console.log(info);})
        .catch(err=>console.log(err))
    };

    return (
        <form onSubmit={handlerCreate}>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" aria-describedby="nombre alumno"/>
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" maxLength={20}/>
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input type="number" className="form-control" id="telefono" maxLength={20}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" maxLength={20}/>
            </div>

            <button type="submit" className="btn btn-primary">Cargar Cliente</button>
        </form>
    )
}