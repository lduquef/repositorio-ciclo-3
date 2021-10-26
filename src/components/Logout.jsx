import React  from "react";
import "../Estilos/Style.css"
import { useAuth0 } from "@auth0/auth0-react";


export const LogoutButton =() => {
    const {logout} = useAuth0();
    const cerrarSesion = () => {
        logout({returnTo: 'http://localhost:3000/src/pages/ingreso.jsx'})}
        localStorage.setItem ('token', null);


    return (
    <button className="login" onClick={() =>  cerrarSesion ()}>
        Cerrar Sesión
    </button>
    );
};