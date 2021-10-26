import React, {useState,useEffect} from 'react';
import "../Estilos/usuarios.css"
import 'react-toastify/dist/ReactToastify.css';
import RegistroUsuario from '../components/RegistroUsuario';
import { ToastContainer } from 'react-toastify';
import axios from "axios";


const GestionUsuario = () =>{

    const getToken = () => {
        return `Bearer ${localStorage.getItem ('token')}`;
    };
    
    const [usuarios, setMostrarUsuarios] = useState([]);
      useEffect(() => {
            const options = {
                  method: 'GET',
                  url: 'http://localhost:3001/api/usuario',
                  headers: {'Content-Type': 'application/json', Authorization: getToken ()},
            };
            axios.request(options).then(function (response) {
                  console.log(response.data);
                  setMostrarUsuarios(response.data.usuarios)
            }).catch(function (error) {
                  console.error(error);
            });
      }, [setMostrarUsuarios]);

    return(
        <>
            <RegistroUsuario listaUsuarios={usuarios} setMostrarUsuarios={setMostrarUsuarios} />
            <ToastContainer position="top-center"
                  autoClose={5000}/>
        </>
           
    )

};

export default GestionUsuario