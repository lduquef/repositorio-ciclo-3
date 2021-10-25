import React, {useState} from 'react';
import "../Estilos/usuarios.css"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistroUsuario from '../components/RegistroUsuario';
import TablaUsuarios from '../components/TablaUsuarios';


const Gestion_usuario = () => {
    const [fecha,setFecha] = useState ([]); //estados
    const [rol,setRol] = useState ([]);
    const [estado,setEstado] = useState ([]);
    

    const enviarAlBackend =() => {             //Función
        console.log( 'Fecha: ', fecha);        //imprime en consola
        console.log( 'Rol asignado: ', rol);
        console.log( 'Estado: ', estado);
        toast.success ('Cambios guardados');
        /*alert(rol);*/
    };

    return(
        <>
            <RegistroUsuario />
            <TablaUsuarios />
            
        </>
           
    )

};

export default Gestion_usuario