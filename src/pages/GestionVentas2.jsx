import React, {useEffect, useState, }  from "react";
import "../Estilos/bootstrap.css"
import "../Estilos/EstilosVentas.css"
import TablaVentas2 from "../components/TablaVentas2.2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const getToken = () => {
      return `Bearer ${localStorage.getItem ('token')}`;
  };


const GestionVentas2 = () =>{
      
      const [Ventas, setMostrarVentas] = useState([]);
      useEffect(() => {

            const options = {
                  method: 'GET',
                  url: 'http://localhost:3001/api/venta',
                  headers: {'Content-Type': 'application/json', Authorization: getToken ()},
            };

            axios.request(options).then(function (response) {
                  console.log(response.data.productos);
                  setMostrarVentas(response.data.productos)

            }).catch(function (error) {
                  console.error(error);
            });
      }, [setMostrarVentas]);

      return(
      < >
       
            {/* <TablaProducto1  /> */}
            <TablaVentas2 listaVentas={Ventas} setMostrarVentas={setMostrarVentas}/>
            <ToastContainer position="top-center"
                  autoClose={5000}/>
      </>
          );
}
export default GestionVentas2;