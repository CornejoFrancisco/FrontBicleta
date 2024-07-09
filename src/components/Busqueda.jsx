
import React, { useState } from "react";

const Busqueda = ({ onData }) => {
    const [busqueda, setBusqueda] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();

        onData(busqueda)


    }

    return (
        <div className="col-12">
            <div className="card mb-3">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios"
                                    id="exampleRadios2" value="Alquileres" onChange={(event) => { setBusqueda(event.target.value); }}></input>
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Alquileres
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios"
                                    id="exampleRadios3" value="Estaciones" onChange={(event) => { setBusqueda(event.target.value); }}></input>
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Estaciones
                                </label>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>

            </div>
        </div>
    );

}

export default Busqueda;

