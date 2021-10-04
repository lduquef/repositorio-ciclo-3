import React, { useEffect, useState} from 'react';
import "../Estilos/bootstrap.css"
function parImpar(numero){
    var value = true
    numero%2 == 0 ? value = true : value = false;
    return(value)
}

const listaVentaBackend=[
    {
        ID_producto: 1,
        producto: "producto1",
        cantidad:1,
        Precio_Unitario:"$---",
        subtotal: "$---",
    },
    {
        ID_producto: 2,
        producto: "producto2",
        cantidad:2,
         Precio_Unitario:"$---",
        subtotal: "$---",
    },
    {
        ID_producto: 3,
        producto: "producto3",
        cantidad:3,
        Precio_Unitario:"$---",
        subtotal: "$---",
    },
    {
        ID_producto: 1,
        producto: "producto1",
        cantidad:1,
        Precio_Unitario:"$---",
        subtotal: "$---",
    },
]
const Ventas =()=>{
    const [ventas, setVentas] = useState([])
    useEffect(() => {
        //obtener lista vehiculos desde el fronten
        setVentas(listaVentaBackend)
    }, []);
    return(
        <div>
         <Tabla_ventas2 listaVenta={ventas}/>  
        </div>
    );
}

const Tabla_ventas2 = ({listaVenta})=>{
    useEffect(() => {
    console.log("lista ventas",listaVenta )
}, [listaVenta])
var count= count +1
    return(
      <div className="container ">
        <table class="table table-hover">
            <thead>
                    <tr class="table-dark">
                        <th>
                            Buscar Producto
                        </th>
                        <th>
                            Buscar ID
                        </th>
                        <th>
                            Cantidad
                        </th>
                    </tr>
                </thead>
            <tbody>
                    <tr class="table-secondary">
                        <th>
                            <select class="form-select" id="exampleSelect1">
                                <option>Producto</option>
                            </select>
                            </th>                
                    <td>
                        <select class="form-select" id="exampleSelect1">
                            <option>ID_1</option>
                            <option>ID_2</option>
                            <option>ID_3</option>
                        </select>
                        </td>
                        <td>
                        <select class="form-select" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        </td>
                </tr>
            </tbody>
        </table>
        <div className="end">
        <button type="button" className="btn btn-success">
         finalizar 
        </button>
        </div>
        <table class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">ID producto</th>
                        <th scope="col">producto</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">subtotal</th>
                    </tr>
                </thead>
                <tbody>
                
            {listaVenta.map((ventas,index) => {
                return(
                    //  cambia color segun arreglo  
                    parImpar(index) ?(
                    <tr class="table-primary">
                        <th scope="row">{ventas.ID_producto}</th>
                        <td>{ventas.producto}</td>
                        <td>{ventas.cantidad}</td>
                        <td>{ventas.Precio_Unitario}</td>
                        <td>{ventas.subtotal}</td>
                    </tr>)  :
                    (
                        <tr class="table-light">
                        <th scope="row">{ventas.ID_producto}</th>
                        <td>{ventas.producto}</td>
                        <td>{ventas.cantidad}</td>
                        <td>{ventas.Precio_Unitario}</td>
                        <td>{ventas.subtotal}</td>
                    </tr> 
                    )
                ) 
                 ;
                })}
                </tbody>
            </table>
        <table class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th>
                            Unidades Totales
                        </th>
                        <th>
                            Total
                        </th>
                        <th>
                            Estado Venta
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-secondary">
                        <th scope="row">3</th>
                        <td>$ ----</td>
                        <div class="form-group">
                            <select class="form-select" id="exampleSelect1">
                                <option>En Proceso</option>
                                <option>Cancelado</option>
                                <option>Entregado</option>
                            </select>
                        </div>

                    </tr>
                </tbody>
        </table>
        <div className="end">
        <button type="button" className="btn btn-success">
         finalizar 
        </button>
        </div>
</div>
    );
}
export default Ventas