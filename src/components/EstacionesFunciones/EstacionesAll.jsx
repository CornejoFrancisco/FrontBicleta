

const EstacionesAll = ( {estaciones} ) => {


    return (
        <div>
            <div>Estaciones</div>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Latitud</th>
                                        <th scope="col">Longitud</th>
                                        <th scope="col">Fecha y hora de creación</th>
                                        <th scope="col">ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {estaciones.map((estacion) => (
                                        <tr key={estacion.id}>
                                            <td>{estacion.nombre}</td>
                                            <td>{estacion.latitud}</td>
                                            <td>{estacion.longitud}</td>
                                            <td>{estacion.fecha_hora_creacion}</td>
                                            <td>{estacion.id}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstacionesAll;
