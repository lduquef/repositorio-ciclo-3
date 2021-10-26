import { useEffect, useState, useRef } from "react/cjs/react.development";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../Estilos/bootstrap.css"
import "../Estilos/EstilosVentas2.css"
import axios from "axios";
import { nanoid } from "nanoid";
import { Tooltip } from "@material-ui/core";


const getToken = () => {
  return `Bearer ${localStorage.getItem ('token')}`;
};

const FilaProducto =({ventas})=>{

  const datos = JSON.parse( ventas.datos)[0]
  console.log("ventas", datos)

  const[ventaDatos,setVentasDatos]= useState("");
  const [edit, setEdit ] = useState(false);
  const [infoNuevoProducto, setInfoNuevoproducto] = useState({
    Factura : datos.Factura,
    Fecha : datos.Fecha,
    cliente: datos.cliente,
    clienteID:datos.clienteID,
  })
  const actulizarVenta = async()=>{
    console.log(infoNuevoProducto)
    const options = {
      method: 'PUT',
      url: 'http://localhost:3001/api/venta',
      headers: {'Content-Type': 'application/json', Authorization: getToken ()},
      data: { ...infoNuevoProducto, id: ventas._id }
    };
    
    await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success("producto modificado con exito");
      setEdit(false);
      window.location.reload();
    }).catch(function (error) {
      toast.success("Error al modificar producto")
      console.error(error); //revisar mas adelante como hacerlo sin f5 forzado
      
    });
  };

  const eliminarVenta =()=>{
    console.log("eliminar venta:",ventas._id)
    const options = {
      method: 'DELETE',
      url: 'http://localhost:3001/api/venta',
      headers: {'Content-Type': 'application/json', Authorization: getToken ()},
      data: {id: ventas._id}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      toast.success("Producto eliminado con éxito")
      window.location.reload();
    }).catch(function (error) {
      console.error(error);
      toast.error("error eliminando el producto")
    });
  }
return (
    
<tr> 
  {edit ? (
 <>
    <td>
      <input  
      type ="text" 
      className="form-control" 
      value={infoNuevoProducto.Factura}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, Factura:e.target.value})} 
      />
    </td>
    <td>
      <input  
      type ="text" 
      className="form-control" 
      value={infoNuevoProducto.Fecha}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, Fecha:e.target.value})} 
      />
    </td>
    <td>
      <input
      className="form-control" 
      type ="text" 
      value={infoNuevoProducto.cliente}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, cliente:e.target.value})}
      />
    </td>
    <td>
      <input 
      className="form-control" 
      type ="text" 
      value={infoNuevoProducto.clienteID}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, clienteID:e.target.value})}
      />
    </td>
    <td>
      <input 
      className="form-control" 
      type ="text" 
      value={infoNuevoProducto.vendedor}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, vendedor:e.target.value})}
      />
    </td>
    <td>
      <input 
      className="form-control" 
      type ="text" 
      value={infoNuevoProducto.vendedorID}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, vendedorID:e.target.value})}
      />
    </td>
    <td>
      <input 
      className="form-control" 
      type ="text"
      value={infoNuevoProducto.total}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, total:e.target.value})} />
      </td>
       <td>
      <input 
      className="form-control" 
      type ="text"
      value={infoNuevoProducto.estado}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, estado:e.target.checked})} />
      </td>
    </>
  
   ): (
     <>
<td>{datos.Factura} </td>  
<td>{datos.Fecha} </td>    
<td>{datos.cliente} </td>
<td>{datos.clienteID}</td>
<td>{datos.cliente} </td>
<td>{datos.clienteID}</td>  
<td>{ventas.total}</td>
<td>{ventas.estado}</td> 
 </>
   )}
   <td>
   <div >
     {edit? (
     <Tooltip title="Confirmar edición" arrow> 
     <a 
     onClick={()=> actulizarVenta()} 
     className="fas fa-check a"
     />
     </Tooltip>
     ):(
      <Tooltip title="Editar vehículo" arrow>
     <a 
     onClick={()=>setEdit(!edit)} 
     className="fas fa-pencil-alt a" 
     />
     </Tooltip>
     )}
    <Tooltip title="Eliminar  producto" arrow>
     < a  
     onClick={()=> eliminarVenta()}
     className="fas fa-trash-alt a"
     />

     </Tooltip>
     
     </div>
     </td>
     </tr>
 

)
}

const TablaVentas2 = ({listaVentas, setMostrarVentas }) =>{
  
  const [busqueda, setBusqueda] = useState(""); 
  const [ventasFiltrados, setVentasFiltrados] = useState(listaVentas);
  const [prueba, setPrueba] = useState(""); 
 
    useEffect(() =>{
     console.log("lista original");
    //  console.log("lista parcial", listaVentas[0]);
     setVentasFiltrados(listaVentas)
     console.log("lista ventas");
    //  console.log("lista prueba", JSON.parse(listaVentas[0].datos)[0])
     
     ;
   }, [busqueda, listaVentas,setPrueba]);

    const form = useRef(null);
 
//     const submitForm = async(e)=> {
//       e.preventDefault();
//       const fd = new  FormData(form.current);
//       // esa variable esta como objeto vacio y alli ingresa los imput como un formato Json, 
//       const nuevoProducto ={};
//       fd.forEach((value, key)=>{
//           nuevoProducto[key] = value;
//       })  
//       setMostrarVentas([...listaVentas,nuevoProducto]);
//       toast.success( "El producto se ha agragado con éxito")
//       console.log("datos del form enviados", nuevoProducto); //" aca se puede ver en la consoloa el Json"
//       await axios.post("http://localhost:3001/api/venta", nuevoProducto)
//   }
 
  return (
    <div className = "classVentas">
      <section className = "container"> 

    <form ref={form} >
      <input 
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      type="text" placeholder="Buscar porducto"/>
    </form>
    
    <table className="form">
          <thead>
            <tr> 
              <th># Factura</th> 
              <th> Fecha</th> 
              <th>Nombre Cliene</th> 
              <th>Cliente ID</th>  
              <th> Vendedor </th>
              <th> VendedorID </th>
              <th> Total venta </th>  
              <th>Acciones</th>

            </tr>
          </thead>
          <tbody>
              {useEffect(() => {
                  
                  
              }, [])}
            {ventasFiltrados.map((ventas)=>{
              return (
                < FilaProducto key={nanoid()} ventas = {ventas}/>
              )
            })}              
          </tbody>
        </table>  
      </section> 
    </div>     
    );
};

export default TablaVentas2;