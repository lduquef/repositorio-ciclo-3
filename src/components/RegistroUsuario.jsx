import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

  useEffect (() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently ({
        audience: `api-autenticacion-DeveloperGroup-mintic`,
    });

    localStorage.setItem ('token', accessToken) 
   
  };

  if (isAuthenticated) {
    fetchAuth0Token ();
  } 

}, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <ReactLoading type='cylon' color='#abc123' height={400} width={200} />; //verificar el reaclogin para css

  if (!isAuthenticated) {
    
    <Link to= 'http://localhost:3000/src/pages/ingreso.jsx'></Link>
  }

  return <>{children}</>;
}


export default PrivateRoute;
import React, {useEffect, useState, useRef} from "react/cjs/react.development";
import "../Estilos/usuarios.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {nanoid} from "nanoid";
import { Tooltip } from "@material-ui/core";
//import { Profile } from "./Profile";
//import { Profile_email } from "./Profile_email";


const getToken = () => {
    return `Bearer ${localStorage.getItem ('token')}`;
};


const FilaUsuario = ({usuarios}) => {
    const[edit, setEdit ] = useState(false);
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        

        nombre: usuarios.nombre,
        email: usuarios.email,
        rol: usuarios.rol,
        estado: usuarios.estado,
    })

    const actualizarUsuario = async()=>{
        console.log(infoNuevoUsuario)
        const options = {
            method: 'PUT',
            url: 'http://localhost:3001/api/usuario',
            headers: {'Content-Type': 'application/json', Authorization: getToken ()},
            data: { ...infoNuevoUsuario, id: usuarios._id }
        };
          
        await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
              toast.success("Usuario modificado con éxito");
              setEdit(false);
              //window.location.reload();
            })
            .catch(function (error) {
                toast.error("Error al modificar el Usuario")
                console.error(error); //revisar mas adelante como hacerlo sin f5 forzado
            });
        };


        const eliminarUsuario =()=>{
            const options = {
                method: 'DELETE',
                url: 'http://localhost:3001/api/usuario',
                headers: {'Content-Type': 'application/json', Authorization: getToken ()},
                data: {id: usuarios._id}
            };
            
            axios.request(options).then(function (response) {
                console.log(response.data);
                toast.success("Usuario eliminado con éxito")
                window.location.reload();
            }).catch(function (error) {
                console.error(error);
                toast.error("Error eliminando Usuario")
            });
          }

return (
<tr> 
    {edit ? (
    <>
        <td>
            <input 
            type ="text" 
            value={infoNuevoUsuario.nombre}
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario, nombre:e.target.value})}
            /></td>
            
        <td>
            <input 
            type ="text"
            value={infoNuevoUsuario.email}
            onChange={(e)=>setInfoNuevoUsuario({...infoNuevoUsuario, email:e.target.value})} 
            /></td>

        <td>
        <select required defaultValue={0} name = "Rol"  onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, rol:e.target.value})} required defaultValue={0}>
            <option disabled value={0}>Editar</option>
            <option>Administrador</option> 
            <option>Vendedor</option>
        </select>

           </td>

        <td>
            <select name = "Estado" onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, estado:e.target.value})} required defaultValue={0}>  
                <option disabled value={0}>Editar</option>
                <option>Autorizado</option> 
                <option>No Autorizado</option>
            </select>
        </td>
            
        </>
    ): (
    <>

<td>{usuarios.nombre}</td> 
<td>{usuarios.email}</td>
<td>{usuarios.rol}</td> 
<td>{usuarios.estado}</td> 
    </>

    )}
    <td>
    <div >
        {edit? (
        <Tooltip title="Confirmar edición" arrow> 
        <a 
        onClick={()=> actualizarUsuario()} 
        className="fas fa-check a"
        />
        </Tooltip>
        ):(
        <Tooltip title="Editar usuario" arrow>
        <a 
        onClick={()=>setEdit(!edit)} 
        className="fas fa-pencil-alt a" 
        />
        </Tooltip>
        )}
        <Tooltip title="Eliminar usuario" arrow>
        < a  
        onClick={()=> eliminarUsuario()}
        className="fas fa-trash-alt a"
        />

        </Tooltip>
</div>
</td>
</tr>
)
}
            
const RegistroUsuario = ({listaUsuarios, setMostrarUsuarios }) =>{

  const [busqueda, setBusqueda] = useState(""); 
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);
    
    useEffect(() =>{

   setUsuariosFiltrados(
    listaUsuarios.filter(elemento => {
   return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
 })
 );
}, [busqueda, listaUsuarios, setUsuariosFiltrados]);
    
    const form = useRef(null); //agregar o listar usuarios
    const submitForm = async(e)=> {
        e.preventDefault();
        const fd = new  FormData(form.current);
     // esa variable esta como objeto vacio y alli ingresa los imput como un formato Json, 
        const nuevoUsuario ={};
        fd.forEach((value, key)=>{
            nuevoUsuario[key] = value;
        })  
        setMostrarUsuarios([...listaUsuarios,nuevoUsuario]);
        toast.success( "El usuario se ha agragado con éxito")
        console.log("Datos del formularios enviados", nuevoUsuario); //" aca se puede ver en la consoloa el Json"
    }
    
    return (
        <div className = "form">
        <form ref = {form} onSubmit = {submitForm}>
            
            <section className="contenedor2">
                <h4>Gestión de usuarios</h4>
                <div className="buscar">
                <input  value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                type="text" placeholder="Buscar usuario"/>  {/alerta de cambios realizados/}
                    </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th> 
                            <th>Email</th>  
                            <th>Rol</th>                            
                            <th>Estado </th> 
                            <th>Acciones</th>
                        </tr>
                    </thead>
                        <tbody>
                           
                            {
                            usuariosFiltrados.map((usuarios)=>{   

                            return (
                            <FilaUsuario key={nanoid()} usuarios = {usuarios}/> 
                            )
                            })
                            }              
                            </tbody>
                            
                        </table>           
            </section>
            </form>
            </div>
            
            
    );
};
export default RegistroUsuario;