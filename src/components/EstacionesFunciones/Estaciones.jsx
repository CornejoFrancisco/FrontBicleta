import axios from "axios";
import { BuscarEstaciones } from "./BuscarEstaciones"
import EstacionesAdd from "./EstacionesAdd"
import EstacionesAll from "./EstacionesAll"
import { useEffect, useState } from "react";


const Estaciones = () => {


    const [estacionesLista, setEstacionesLista] = useState([]); // Cambiar a [] para que sea un arreglo


    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const resultado = await axios.get("http://localhost:8080/api/estaciones/all");
                setEstacionesLista(resultado.data);
                console.log("Datos obtenidos:", resultado.data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        consultarAPI(); // Llamar la función para realizar la consulta una vez al montar el componente

    }, []); // Vacío para que se ejecute solo una vez al montar


    const onConsultarEstaciones = async (latitud, longitud) => {
        console.log(latitud, longitud);

        try {
            const resultado = await axios.get(`http://localhost:8080/api/estaciones/${longitud}&${latitud}`);
            setEstacionesLista(resultado.data);
            console.log("Datos obtenidos:", resultado.data);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    return (
        <div>
            <div>Estaciones</div>
            <div className="row">
                <div className="col-12">
                    <EstacionesAdd /> {/* Renderiza el componente Busqueda si mostrarBusqueda es true */}
                    <BuscarEstaciones onData={onConsultarEstaciones} /> {/* Renderiza el componente Busqueda si mostrarBusqueda es true */}
                    <EstacionesAll estaciones={estacionesLista} />
                </div>
            </div>
        </div>
    )

}


export default Estaciones;