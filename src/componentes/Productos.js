import React,{Component} from 'react';
import Producto from './Producto';
import "./css/Productos.css"
import Buscador from './Buscador';

class Productos extends Component {
    render() { 
        return (
            <div className="productos">
                <Buscador buscarProducto={this.props.buscarProducto}/>
                <ul className="lista-productos">
                    {
                        this.props.productos.map((producto,index) => (
                            <Producto key={index} producto={producto} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}
 
export default Productos;