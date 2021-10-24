import React, { useEffect, useState} from 'react';
import "../Estilos/bootstrap.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from "axios";
function parImpar(numero){
    var value = true
    numero%2 === 0 ? value = true : value = false;
    return(value)
}
//simula la base de datos

const Tabla_ventas1 = ()=>{
    return(
      <div className="container  container2">
        <div className="column ">
            <label >Fecha </label>
            <input type="date" className="form-control" />
            <label >Vendedor </label>
            <input type="text" className="form-control"  />
            <label >Vendedor ID </label>
            <input type="number" min="0"  className="form-control"  />
            <label >Cliente </label>
            <input type="text" className="form-control"  />
            <label >Cliente ID </label>
            <input type="number" min="0" className="form-control"  />
        </div>
        <div className="container3">
        <div className="container ">
           <h4># Factura</h4>
           <input type="number"min="1000" className="form-control"  />
        </div>
        </div>
</div>
    );
}
//logica general
const Ventas =()=>{
    const [ventas, setVentas] = useState([])
    const [productos, setMostrarProductos] = useState([]);
    useEffect(() => {
          const options = { method: 'GET', url: 'http://localhost:3001/api/product' };

          axios.request(options).then(function (response) {
                console.log(response.data);
                setMostrarProductos(response.data.productos)

          }).catch(function (error) {
                console.error(error);
          });
    }, [setMostrarProductos]);

    useEffect(() => {
        //obtener lista articulos desde el fronten
        setVentas(listaVentaBackend)
    }, []);
    // // useEffect(() => {
    // //     //obtener lista articulos desde el fronten
    // //     setListaProducto(listaProductosBackend)
    // }, []);
    return(
        <div className="classVentas">
        <Tabla_ventas1/>
        <div className= "container">
        <button type="button" className="btn btn-success">
        <Link to="/src/pages/GestionVentas2.jsx"> historial </Link>
        </button>
        <Formulario funcionParaAgregarVenta = {setVentas} listaVenta={ventas} listaProducto={productos}/>
        <ToastContainer position="bottom-center" autoclose ={3000}/>
        <TablaVentas2 listaVenta={ventas}/>  
        </div>
        </div>
    );
}
//parte de la tabla
const TablaVentas2 = ({listaVenta})=>{
    let total = 0;
    let unidad = 0;
    useEffect(() => {
}, [listaVenta])
const enviarAlBackend = async(e)=> {
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/api/venta',
        headers: {'Content-Type': 'application/json'},
        data: {unidad: unidad,total:total,listaVenta : JSON.stringify(listaVenta)  }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
}

    return(
      <div className="container ">
        <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Id nombre</th>
                        <th scope="col">nombre</th>
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
                    index !== 0?(
                    parImpar(index) ?(
                    <tr  className="table-primary">
                        <th scope="row">{ventas.codigo}</th>
                        <td>{ventas.nombre}</td>
                        <td>{ventas.cantidad}</td>
                        <td>${ventas.precio}</td>
                        <td>${parseInt(ventas.precio) * parseInt(ventas.cantidad)}</td>
                    </tr>)  :
                    (
                    <tr  className="table-light">
                        <th scope="row">{ventas.codigo}</th>
                        <td>{ventas.nombre}</td>
                        <td>{ventas.cantidad}</td>
                        <td>${ventas.precio}</td>
                        <td>${parseInt(ventas.precio) * parseInt(ventas.cantidad)}</td>
                    </tr> 
                    )
                    ) :(<tr  className="table-light">
                    
                </tr> )

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
                            <select className="form-select" Id="exampleSelect1">
                                <option>En Proceso</option>
                                <option>Cancelado</option>
                                <option>Entregado</option>
                            </select>
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
};
//formulario
const Formulario = ({funcionParaAgregarVenta ,listaVenta , listaProducto}) =>{
    const [codigo,setCodigo]=useState("")
    const [cantidad,setCantidad] = useState("")
    const [nombre,setProducto] = useState("")
    const [precio,setPrecioUnitario]=useState("")
    useEffect(() => {
        
    }, [setCodigo,setPrecioUnitario,setCantidad,setProducto])
     const buscarPorID = (codigo) =>{
         const newUser = listaProducto.filter(function(element) {
             return(element.codigo==codigo);
         })
         console.log("soy new user",newUser[0].codigo);
         return( setProducto(newUser[0].nombre),
             setPrecioUnitario(newUser[0].precio))
     }  

    const enviarAlBackend =  () =>{
    if(codigo==="") {
        toast.warn("error")
    }
    else
    {
    buscarPorID(codigo);
    funcionParaAgregarVenta([...listaVenta,{codigo:codigo,nombre:nombre,cantidad:cantidad,
        precio:precio,subtotal: precio*cantidad }]);
        toast.success("bien ingresado");    
    }}
    
    return(
        <div>
        <table className="table table-hover">
            <thead>
                    <tr className="table-dark">
                    <th>
                            Buscar Producto
                        </th>
                        <th>
                            Buscar Id
                        </th>
                        <th>
                            Cantidad
                        </th>
                    </tr>
                </thead>
            <tbody>
                    <tr className="table-secondary">
                    <th>
                            {/* <select className="form-select" name="productos" value={nombre} onChange={(e)=> setProducto(e.target.value)} required>
                            <option value="" disabled>Productos</option>
                            {listaProducto.map((nombre) => {
                                return(
                            <option>{nombre.nombre}</option>)
                                })}
                            </select> */}
                            <h4>{nombre}</h4>
                    </th>
                    <td>
                        <select className="form-select" name = "Id" value ={codigo} onChange ={(e)=>(setCodigo(e.target.value))} required >
                            <option disabled> buscar por Id</option>
                            {listaProducto.map((nombre) => {
                                return(
                            <option>{nombre.codigo}</option> 
                             )
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