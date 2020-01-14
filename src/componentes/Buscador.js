import React from 'react';
import "./css/Buscador.css"
class Buscador extends React.Component {
    
    buscarProducto = (e) => {
        this.props.buscarProducto(e.target.value)
    }

    render() { 
        return (
            <div className="buscador">
                <input type="text" placeholder="Ingrese la palabra clave..." onChange={this.buscarProducto}/>
            </div>
        );
    }
}
 
export default Buscador;