import React  from "react";
import "../Estilos/usuarios.css"
import { useAuth0 } from "@auth0/auth0-react"; //Autenticación de usuario con el onClick={() => loginWithRedirect()}

export const LoginButton =() => {
    
    const { loginWithRedirect } = useAuth0();
    return <button  onClick={() => loginWithRedirect()} id="ingresar">Iniciar Sesión</button>
}