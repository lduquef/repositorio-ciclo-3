import React  from "react";
import "../Estilos/estilos2.css"
 {/*import Developer from "../img/developer.jpg"*/}

const ingreso = () =>{
    return(
      <div className="App">
      <div className="conten">
      <section className="login_Developer">
      {/*<img class="avatar" src={Developer} alt="Logo_del_grupo"/>*/}
      <h1>Iniciar Sesion</h1>      
      <form>
      <label for="nombre_usuario">Nombre de usuario</label>
      <input type="text" placeholder="Ingrese Nombre de Usuario"></input>
      <label for="Constraseña">Contraseña</label>
      <input type="password" placeholder="Ingrese su contraseña"></input>
      
      <div className="botones">
      <button type="submit">Ingresar</button> 
      <span> -------  o  ------- </span>
      <button type="Google">Ingresar con Google</button> 
      </div>
     
      <div class="foot-lnk">
        <a href="#forgot">Registrarse</a>
        </div>
      

      </form>
      </section>
    </div>
    </div>

);
}

export default ingreso