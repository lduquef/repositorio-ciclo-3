import { useEffect, useState, useRef } from "react/cjs/react.development";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Estilos/producto.css"
import axios from "axios";
import { nanoid } from "nanoid";
import { Tooltip } from "@material-ui/core";



const FilaProducto =({productos})=>{
  console.log("productos",productos)
  const [edit, setEdit ] = useState(false);
  const [infoNuevoProducto, setInfoNuevoproducto] = useState({
    codigo:productos.codigo,
    nombre: productos.nombre,
    precio: productos.precio,
    estado: productos.estado,
  })
  const actualizarproducto = async()=>{
    console.log(infoNuevoProducto)
    const options = {
      method: 'PUT',
      url: 'http://localhost:3001/api/product',
      headers: {'Content-Type': 'application/json'},
      data: { ...infoNuevoProducto, id: productos._id }
    };
    
    await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success("producto modificado con exito");
      setEdit(false);
      window.location.reload();
    }).catch(function (error) {
      toast.error("Error al modificar producto")
      console.error(error); //revisar mas adelante como hacerlo sin f5 forzado
      
    });
  };

  const eliminarProducto =()=>{
    const options = {
      method: 'DELETE',
      url: 'http://localhost:3001/api/product',
      headers: {'Content-Type': 'application/json'},
      data: {id: productos._id}
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
      value={infoNuevoProducto.codigo}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, codigo:e.target.value})} 
      />
    </td>
    <td>
      <input 
      type ="text" 
      value={infoNuevoProducto.nombre}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, nombre:e.target.value})}
      />
    </td>
    <td>
      <input 
      type ="text"
      value={infoNuevoProducto.precio}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, precio:e.target.value})} />
      </td>
       <td>
      <input 
      type ="text"
      value={infoNuevoProducto.estado}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, estado:e.target.checked})} />
      </td>
    </>
  
   ): (
     <>
<td>{productos.codigo} </td>
<td>{productos.nombre}</td> 
<td>{productos.precio}</td>
<td>{productos.estado}</td> 
 </>
   )}
   <td>
   <div >
     {edit? (
     <Tooltip title="Confirmar edición" arrow> 
     <a 
     onClick={()=> actualizarproducto()} 
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
     onClick={()=> eliminarProducto()}
     className="fas fa-trash-alt a"
     />

     </Tooltip>
     
     </div>
     </td>
     </tr>
 

)
}

const TablaProducto2 = ({listaProductos, setMostrarProductos }) =>{
  
  const [busqueda, setBusqueda] = useState(""); 
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);
 
    useEffect(() =>{
    //  console.log("busqueda", busqueda);
    //  console.log("lista original", listaProductos)
     setProductosFiltrados(
        listaProductos.filter(elemento=>{
       return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
     })
     );
   }, [busqueda, listaProductos]);
  
  // useEffect(() =>{
  //   console.log("este es el contenido del la lsita de productos", listaProductos)
  //   }, [listaProductos]);

    const form = useRef(null);
    
    
    const submitForm = async(e)=> {
      e.preventDefault();
      const fd = new  FormData(form.current);
      // esa variable esta como objeto vacio y alli ingresa los imput como un formato Json, 
      const nuevoProducto ={};
      fd.forEach((value, key)=>{
          nuevoProducto[key] = value;
      })  
      setMostrarProductos([...listaProductos,nuevoProducto]);
      toast.success( "El producto se ha agragado con éxito")
      console.log("datos del form enviados", nuevoProducto); //" aca se puede ver en la consoloa el Json"
      await axios.post("http://localhost:3001/api/product", nuevoProducto)
  }
 
    return (
            <section className="login_Developer_2"> 

              <form ref={form} onSubmit ={submitForm}>
                <input 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                type="text" placeholder="Buscar porducto"/>
                <h3>Nuevo producto</h3>
                <label htmlfor="producto">ingrese id</label>
                  <label htmlfor="producto">ingrese producto</label>
              
                  <label htmlfor="producto">ingrese precio</label>
                  <label htmlfor="producto">estado</label>
                  <input  required type="text" placeholder="IdProducto"  name ="codigo" />
                  <input required type="text" placeholder="NuevoProducto" name="nombre" /> 
                  <input  required  type="id" placeholder="Precio"  name="precio" />
                   
                    <select  required    
                    name="estado" 
                     type="id" 
                    placeholder="Estado" >
                      <option>Disponible</option>
                      <option>No_disponible</option>
                      </select>
                      <button type="submit" className ="buttoning "  >
                     Ingresar 
                     </button>
                    
                
              </form>
              
              <table>
                    <thead>
                      <tr> 
                        <th>id producto</th> 
                        <th>Detalle Producto</th> 
                        <th>Valor Unitario</th>  
                        <th>  Estado </th> 
                        <th>Acciones</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      {productosFiltrados.map((productos)=>{
                        return (
                          
                          < FilaProducto key={nanoid()} productos = {productos}/>
                        )
                      })}              
                    </tbody>

             
                  </table>  
          
                  </section>    
      
    );
};

export default TablaProducto2;
