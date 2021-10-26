import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

  useEffect (() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently ({
        audience: `api-autenticacion-DeveloperGroup-mintic`,
    });

    localStorage.setItem ('token', accessToken) 
   
  };

  if (isAuthenticated) {
    fetchAuth0Token ();
  } 

}, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <ReactLoading type='cylon' color='#abc123' height={400} width={200} />; //verificar el reaclogin para css

  if (!isAuthenticated) {
    
    <Link to= 'http://localhost:3000/src/pages/ingreso.jsx'></Link>
  }

  return <>{children}</>;
}


export default PrivateRoute;