
const Barrar = () => {

    return (
        <div className="mb-3">
            <label className="form-label">Filtro:</label>
            <input type="text" placeholder='Descripcion'
                className="form-control" onChange={(event) => { setFiltro(event.target.value); }} />
        </div>
    )
}

export default Barrar;