import "../Estilos/usuarios.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TablaUsuarios = () => {
    return (
        <section className="contenedor2"> 
        <table>
              <thead>
                <tr> 
                  <th>Nombre</th> 
                  <th>Apellido</th> 
                  <th>Email</th>  
                  <th>  Estado </th> 
                  <th>Rol</th>
                
                  
                </tr>
              </thead>
              

       
            </table>  
    
            </section>
    )
}

export default TablaUsuarios
