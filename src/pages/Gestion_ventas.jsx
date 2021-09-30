import React  from "react";
import "../Estilos/bootstrap.css"
import "../Estilos/Estilos_ventas.css"
import Tabla_ventas from "../components/Tabla_ventas";
const Gestion_ventas = () =>{
    return(
    <div className="page">
        <div className="container">
        <h3>numero de factura</h3>
        <h3>nombre del cliente</h3>
        <h3>ID del cliente</h3>
        <br /><h3>nombre del vendedor</h3>
        <h3>ID vendedor </h3>
        </div>
        <Tabla_ventas>

        </Tabla_ventas>
</div>
);
}
export default Gestion_ventas
