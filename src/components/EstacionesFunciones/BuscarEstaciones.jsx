

import React, { useState } from 'react'

export const BuscarEstaciones = ({ onData }) => {
    const [latitud, setLatitud] = useState([]);
    const [altitud, setAltitud] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();

        onData(latitud, altitud)


    }

    return (
        <div className="col-12">
            <div className="card mb-3">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <div className="form-check">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Escribe la latitud..."
                                    onChange={(event) => { setLatitud(event.target.value); }}
                                />


                            </div>
                            <div className="form-check">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Escribe la altitud..."
                                    onChange={(event) => { setAltitud(event.target.value); }}
                                />
                            </div>

                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>

            </div>
        </div>
    );

}
