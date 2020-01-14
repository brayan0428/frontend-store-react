import React from 'react';
import { Link } from 'react-router-dom';

const Producto = (props) => {
    const {nombre,imagen,precio,id} = props.producto
    return (
        <li>
            <img src={`img/${imagen}.jpg`} alt={nombre} />
            <p>{nombre} <span>{precio}</span></p>
            <Link to={`/producto/${id}`}>Más Información</Link>
        </li>
    );
}
 
export default Producto;