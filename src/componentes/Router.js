import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import listProductos from "../datos/datos.json";

import Nosotros from "./Nosotros";
import Productos from "./Productos"
import Error from './Error.js';
import SingleProducto from './SingleProducto.js';
import Header from './Header.js';
import Navegacion from './Navegacion.js';
import Contacto from './Contacto.js';

class Router extends Component {
    state = {productos:[], terminoBusqueda: ''}

    componentWillMount(){
        this.setState({productos:listProductos})
    }

    buscarProducto = (busqueda) => {
        if(busqueda.length > 2){
            this.setState({terminoBusqueda:busqueda})
        }else{
            this.setState({terminoBusqueda:''})
        }
    }

    render() { 

        let resultado = this.state.productos
        if(this.state.terminoBusqueda !== ''){
            resultado = this.state.productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf(this.state.terminoBusqueda) !== -1
            ))
        }
        return ( 
            <BrowserRouter>
                <Header />
                <Navegacion/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Productos productos={resultado} buscarProducto={this.buscarProducto}/>
                    )}/>
                    <Route exact path="/productos" render={() => (
                        <Productos productos={resultado} buscarProducto={this.buscarProducto}/>
                    )}/>
                    <Route exact path="/producto/:id" render={(props) => {
                        let id = props.match.params.id
                        return (
                            <SingleProducto producto={this.state.productos[id]}/>
                        )
                    }} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Router component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Router;