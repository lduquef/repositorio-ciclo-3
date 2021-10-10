import React, { useEffect, useState} from 'react';
import "../Estilos/bootstrap.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function parImpar(numero){
    var value = true
    numero%2 === 0 ? value = true : value = false;
    return(value)
}
//simula la base de datos
const listaVentaBackend=[
    
]
const listaProductosBackend=[
    {
        ID: 1,
        producto: "producto1",
        cantidad:1,
        precioUnitario:1,
        subtotal: 0,
    },
    {
        ID: 2,
        producto: "producto2",
        cantidad:2,
        precioUnitario:2,
        subtotal: 0,
    },
    {
        ID: 3,
        producto: "producto3",
        cantidad:0,
        precioUnitario:3,
        subtotal: 0,
    },
    {
        ID: 4,
        producto: "producto1",
        cantidad:4,
        precioUnitario:4,
        subtotal: 0,
    },   
]
//logica general
const Ventas =()=>{
    const [ventas, setVentas] = useState([])
    const [listaProducto, setListaProducto] = useState([])
    useEffect(() => {
        //obtener lista vehiculos desde el fronten
        setVentas(listaVentaBackend)
    }, []);
    useEffect(() => {
        //obtener lista vehiculos desde el fronten
        setListaProducto(listaProductosBackend)
    }, []);
    return(
        <div className= "container">
        <Formulario funcionParAgregarVenta = {setVentas} listaVenta={ventas} listaProducto={listaProducto}/>
        <ToastContainer position="bottom-center" autoclose ={3000}/>
        <TablaVentas2 listaVenta={ventas}/>  
        
        </div>
    );
}
//parte de la tabla
const TablaVentas2 = ({listaVenta})=>{
    let total = 0;
    let unidad = 0;
    useEffect(() => {
    console.log("lista venta" )
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
                total += ventas.subtotal;
                unidad += parseInt(ventas.cantidad);
                return(
                    //  cambia color segun arreglo  
                    parImpar(index) ?(
                    <tr  className="table-primary">
                        <th scope="row">{ventas.ID}</th>
                        <td>{ventas.producto}</td>
                        <td>{ventas.cantidad}</td>
                        <td>${ventas.precioUnitario}</td>
                        <td>${ventas.subtotal}</td>
                    </tr>)  :
                    (
                    <tr  className="table-light">
                        <th scope="row">{ventas.ID}</th>
                        <td>{ventas.producto}</td>
                        <td>{ventas.cantidad}</td>
                        <td>${ventas.precioUnitario}</td>
                        <td>${ventas.subtotal}</td>
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
                        <th scope="row">{unidad}</th>
                        <td>
                            $ {total}
                        </td>
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
//formulario
const Formulario = ({funcionParAgregarVenta ,listaVenta , listaProducto}) =>{
    const [ID,setID]=useState("")
    const [cantidad,setCantidad] = useState("")
    const [producto,setProducto] = useState("")
    const [precioUnitario,setPrecioUnitario]=useState("")
const enviarAlBackend = () =>{
    console.log("precio Unitario");

    funcionParAgregarVenta([...listaVenta,{ID:ID,producto:producto,cantidad:cantidad,
        precioUnitario:precioUnitario,subtotal: 3*cantidad }])
    toast.success("bien agregado")
    }

const submitForm =(e) =>{
console.log("datos enviados")
}
    return(
        <div>
        <table onSubmit={submitForm} className="table table-hover">
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
                            <select className="form-select" name="productos" value={producto} onChange={(e)=> setProducto(e.target.value)} required>
                            <option value="" disabled>Productos</option>
                            {listaProducto.map((producto) => {
                                return(
                            <option>{producto.producto}</option>)
                                })}
                    
                            </select>
                            </th>                
                    <td>
                        <select className="form-select" name = "ID" value ={ID} onChange ={(e)=>setID(e.target.value)} required >
                            <option disabled> buscar por ID</option>
                            {listaProducto.map((producto) => {
                                return(
                            <option>{producto.ID}</option>)
                                })}
                        </select>
                        </td>
                        <td>
                        <input type="number" min="0" className="form-control" value={cantidad} onChange={(e)=>setCantidad(e.target.value)}  required />
                        </td>
                        
                </tr>
            </tbody>
        </table>
        <div className="end">
            
        <button type="submit" className="btn btn-success" onClick={()=>{enviarAlBackend()}}>
         agregar
        </button>
        </div>
        </div>
    );
}
export default Ventas