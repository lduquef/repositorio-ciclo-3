import React, {useState} from 'react';
import "../Estilos/usuarios.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistroUsuario = () => {
    const [fecha,setFecha] = useState ([]); //estados
    const [rol,setRol] = useState ([]);
    const [estado,setEstado] = useState ([]);
    

    const enviarAlBackend =() => {             //Función
        console.log( 'Fecha: ', fecha);        //imprime en consola
        console.log( 'Rol asignado: ', rol);
        console.log( 'Estado: ', estado);
        toast.success ('Cambios guardados');
    };
        /*alert(rol);*/
    return (
        <div className="contenedor">
                
                 <h3>Gestión de usuarios</h3>
                  <hr/>
                  <form> 
                    <input id="fecha" type="date" onChange={(e) => {setFecha(e.target.value);}}/> {/*Captura el cambio en el estado y lo guarda en la veriable setFecha*/} 
                    <div className="opciones">
                    <input className="seleccionar" name="nombre" placeholder="Nombre" />
                    <input className="seleccionar" name="apellido" placeholder="Apellido" />
                        
                    

                    <input className="seleccionar" name= "email" placeholder="Email"/> 
                    
                    </div>
                    
                    <div className="opciones2">
                         
                                                 
                        <select required defaultValue={0} onChange={(e) => {setRol(e.target.value);}} >
                        <option disabled value={0}>
                            Roles
                        </option>
                        <option>Administrador</option>
                        <option>Vendedor</option>                  
                    </select>
                    </div>
                    <hr/>

                    
                    <div className="selec">
                        <label htmlFort="Estado">Cambiar estado de usuario</label>
                        <select required defaultValue={0} onChange={(e) => {setEstado(e.target.value);}}> 
                        <option disabled value={0}>Estado</option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                        </select> 
                    </div>

                    <div className="botones1">
                        <button type="button" onClick = {enviarAlBackend}>Guardar Datos</button> {/* ejecuta funcion enviaAlBakend al dar clic en botón*/}
                        <button type ="reset"> Limpiar Campos </button>
                        <ToastContainer position="top-right" autoClose={4000}/>
                    </div>
            </form>
             
            </div>
    )
};

export default RegistroUsuario
