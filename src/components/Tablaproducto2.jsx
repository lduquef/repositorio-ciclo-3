import { useEffect, useState, useRef } from "react/cjs/react.development";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Estilos/producto.css"
import axios from "axios";
import { nanoid } from "nanoid";

const Filaproducto =({productos})=>{
  const[edit, setEdit ] = useState(false);
  const [infoNuevoProducto, setInfoNuevoproducto] = useState({
    id:productos.id,
    nombre: productos.nombre,
    precio: productos.precio,
    estado: productos.estado,
  })
  const actualizarproducto =()=>{
    console.log(infoNuevoProducto)

  }
return (
    
<tr  > 
  {edit ? (
 <>
    <td>
      <input  
      type ="text" 
      value={infoNuevoProducto.id}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, id:e.target.value})} 
      /></td>
    <td>
      <input 
      type ="text" 
      value={infoNuevoProducto.nombre}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, nombre:e.target.value})}
      /></td>
    <td><input type ="text" value={infoNuevoProducto.precio}/></td>
    <td>
      <input 
      type ="text"
      value={infoNuevoProducto.estado}
      onChange={(e)=>setInfoNuevoproducto({...infoNuevoProducto, precio:e.target.value})} 
      /></td>
       <td>
      <input 
      type ="text"
      value={infoNuevoProducto.estado}
      onChange={e=>setInfoNuevoproducto({...infoNuevoProducto, estado:e.target.value})} 
      /></td>
    </>
  
   ): (
     <>
<td>{productos.id} </td>
<td>{productos.nombre}</td> 
<td>{productos.precio}</td>
<td>{productos.estado}</td> 
 </>
   )}
   <td>
   <div >
     {edit? (<a onClick={()=> actualizarproducto} className="fas fa-check "/>
     ):(
     <a onClick={()=>setEdit(!edit)} className="fas fa-pencil-alt "  />
     )}
     < a  className="fas fa-trash-alt a"/>
     </div>
     </td>
     </tr>
 

)
}

const TablaProducto2 = ({listaProductos, setMostrarProductos }) =>{
  
  useEffect(() =>{
    console.log("este es el contenido del la lsita de productos", listaProductos)
    }, [listaProductos]);

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
                <h3>Nuevo producto</h3>
                <label htmlfor="producto">ingrese id</label>
                  <label htmlfor="producto">ingrese producto</label>
              
                  <label htmlfor="producto">ingrese precio</label>
                  <label htmlfor="producto">estado</label>
                  <input  required type="text" placeholder="IdProducto"  name ="id" />
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
                      {listaProductos.map((productos)=>{
                        return (
                          
                          < Filaproducto key={nanoid()} productos = {productos}/>
                        )
                      })}              
                    </tbody>

             
                  </table>  
          
                  </section>    
      
    );
};

export default TablaProducto2;