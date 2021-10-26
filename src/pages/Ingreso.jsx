import React  from "react";
import "../Estilos/estilos2.css";
import { LoginButton } from "../components/Login";

const Ingreso = () =>{

    return(
      <div className="App">
      <div className="conten">
      <section className="login_Developer">

      <h1><b>Te damos la bienvenida a DEVELOPER GROUP</b></h1><hr/>     
            
      <div className="botones">
      <LoginButton/> 
      </div>

      </section>
    </div>
    </div>

);
}

export default Ingreso