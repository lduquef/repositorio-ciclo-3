import React, { useEffect, useState} from 'react';
import "../Estilos/bootstrap.css"
function parImpar(numero){
    var value = true
    numero%2 === 0 ? value = true : value = false;
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
        <div className= "container">
        <Formulario/>
        <TablaVentas2 listaVenta={ventas}/>  
        </div>
    );
}

const TablaVentas2 = ({listaVenta})=>{
    useEffect(() => {
    console.log("lista ventas",listaVenta )
}, [listaVenta])
    return(
      <div className="container ">
        <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
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
                    <tr className="table-primary">
                        <th scope="row">{ventas.ID_producto}</th>
                        <td>{ventas.producto}</td>
                        <td>{ventas.cantidad}</td>
                        <td>{ventas.Precio_Unitario}</td>
                        <td>{ventas.subtotal}</td>
                    </tr>)  :
                    (
                        <tr className="table-light">
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
        <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
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
                    <tr className="table-secondary">
                        <th scope="row">3</th>
                        <td>$ ----</td>
                        <td className="form-group">
                            <select className="form-select" id="exampleSelect1">
                                <option>En Proceso</option>
                                <option>Cancelado</option>
                                <option>Entregado</option>
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
        </div>
    );
};

const Formulario = () =>{
    const [ID,setID]=useState("")
    const [cantidad,setCantidad] = useState("")
    const [nombreProducto,setNombreProducto] = useState("")
    const enviarAlBackend = () =>{
    console.log("nombre",nombreProducto,"ID",ID,"cantidad",cantidad)}
    return(
        <div>
        <table className="table table-hover">
            <thead>
                    <tr className="table-dark">
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
                    <tr className="table-secondary">
                        <th>
                            <select className="form-select" name="productos" value={nombreProducto} onChange={(e)=> setNombreProducto(e.target.value)}>
                            <option disabled>Productos</option>
                            <option>Producto1</option>
                            <option>Producto2</option>
                            <option>Producto3</option>
                            </select>
                            </th>                
                    <td>
                        <select className="form-select" name = "ID" value ={ID} onChange ={(e)=>setID(e.target.value)} >
                            <option disabled> buscar por ID</option>
                            <option>ID_1</option>
                            <option>ID_2</option>
                            <option>ID_3</option>
                        </select>
                        </td>
                        <td>
                        <input type="number"  className="form-control" value={cantidad} onChange={(e)=>setCantidad(e.target.value)} />
                        </td>
                </tr>
            </tbody>
        </table>
        <div className="end">
        <button type="button" className="btn btn-success" onClick={()=>{enviarAlBackend()}}>
         agregar
        </button>
        </div>
        </div>
    );
}
export default Ventas