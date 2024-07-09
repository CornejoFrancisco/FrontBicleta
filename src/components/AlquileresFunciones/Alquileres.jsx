
import React from 'react'
import { AddFinAlquiler } from './AddFinAlquiler'
import { AddIniAlquier } from './AddIniAlquier'
import { BuscarAlquiler } from './BuscarAlquiler'
import { BuscarCliente } from './BuscarCliente'

export const Alquileres = () => {


    const onConsultarAlquileres = () => {
    
    }
  return (
    <div>
          
            <div>Alquileres</div>
            <div className="row">
                <div className="col-12">
                    <AddFinAlquiler /> {/* Renderiza el componente Busqueda si mostrarBusqueda es true */}
                    <AddIniAlquier onData={onConsultarAlquileres} /> {/* Renderiza el componente Busqueda si mostrarBusqueda es true */}
                    <BuscarAlquiler />
                    <BuscarCliente/>
                </div>
            </div>
 

    </div>
  )
}
