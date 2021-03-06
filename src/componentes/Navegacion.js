import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Navegacion.css"

const Navegacion = () => {
    return (
        <div className="navegacion">
            <NavLink to="/nosotros" activeClassName="activo"> Nosotros</NavLink>
            <NavLink to="/productos" activeClassName="activo">Productos</NavLink>
            <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
        </div>
    );
}
 
export default Navegacion;