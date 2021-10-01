import React  from "react";
import "../Estilos/usuarios.css"
const Gestion_usuario = () =>{
    return(
            <div className="contenedor">
                 <h3>Gestión de usuarios</h3>
                 <hr></hr>
                <form>
                    <input id="fecha" type="date"/>
                    <div className="opciones">
                    <select className="seleccionar" required defaultValue={0}>
                        <option disabled value={0}>
                        usuario
                        </option>
                        <option>Usuario1</option>
                        <option>Usuario2</option>
                        <option>Usuario3</option>
                    </select>
                    <select required defaultValue={0}>
                        <option disabled value={0}>
                            Rol de usuario
                        </option>
                        <option>Admnistrador</option>
                        <option>Vendedor</option>                  
                    </select>
                    </div>
                    
                    <div className="opciones2">
                        <input name= "id" placeholder="Identificación"/>  
                        <input type="codigo" placeholder="Código asignado"/>   
                        <input name= "estado" placeholder="Estado Actual"/>
                    </div>
                    <hr />
                    <h4>Cambiar Estado</h4>
                    <div className="selec">
                    
                        
                        <select  required defaultValue={0}>
                        <option disabled value={0}>
                            Estado
                        </option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                        </select> 
                    </div>

                    <div className="botones">
                        <button type ="save">Guardar Datos</button>
                        <button type ="reset"> Limpiar Campos </button>
                    </div>
  
            </form>
                
            </div>  
    )
}
export default Gestion_usuario