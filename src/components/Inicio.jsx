import React, { useState } from "react";
import Busqueda from "./Busqueda";
import Estaciones from "./EstacionesFunciones/Estaciones";
import { Alquileres } from "./AlquileresFunciones/Alquileres";

const Inicio = () => {
    

    const [mostrarBusquedaAlquileres, setMostrarBusquedaAlquileres] = useState(false);
    const [mostrarBusquedaEstaciones, setMostrarBusquedaEstaciones] = useState(false);


    const onConsultar = (busqueda) => {
        console.log(busqueda);

        // Ejemplo de condición: si busqueda es igual a 'Alquileres'
        if (busqueda === "Alquileres") {
            setMostrarBusquedaAlquileres(true); // Cambia el estado para mostrar la búsqueda
        } else {
            setMostrarBusquedaAlquileres(false); // Cambia el estado para ocultar la búsqueda
        }
        if (busqueda === "Estaciones") {
            setMostrarBusquedaEstaciones(true);
        } else {
            setMostrarBusquedaEstaciones(false);
        }
    };

    return (
        <>
            <div>Busqueda de alquiler</div>
            <div className="row">
                <div className="col-12">
                    <Busqueda onData={onConsultar}></Busqueda>
                </div>
            </div>

            { mostrarBusquedaEstaciones && (
                <div className="row">
                    <div className="col-12">
                        <Estaciones/>
                    </div>
                </div>
            )}
            { mostrarBusquedaAlquileres && (

                <div className="row">
                    <div className="col-12">
                        <Alquileres/>
                    </div>
                </div>
            )}

        </>
    );
};

export default Inicio;
