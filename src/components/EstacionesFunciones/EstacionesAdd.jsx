import React, { Fragment, useState } from 'react';

export const EstacionesAdd = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        latitud: '',
        longitud: ''
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log('enviando datos...' + datos.nombre + ' ' + datos.latitud + ' ' + datos.longitud);
    };

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        onChange={handleInputChange}
                        name="nombre"
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Latitud"
                        className="form-control"
                        onChange={handleInputChange}
                        name="latitud"
                        pattern="[0-9]*"
                        title="Por favor, ingresa solo números"
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Longitud"
                        className="form-control"
                        onChange={handleInputChange}
                        name="longitud"
                        pattern="[0-9]*"
                        title="Por favor, ingresa solo números"
                    />
                </div>
                <div className="col-md-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={enviarDatos}
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default EstacionesAdd;
