import Layout from './Layouts/layout.jsx';
import PrivateLayout from './Layouts/PrivateLayout.jsx';

import './Estilos/Style.css';
import "./Estilos/estilos2.css"
import GestionProductos from './pages/GestionProductos.jsx';
import GestionUsuario from './pages/GestionUsuario.jsx';
import GestionVentas from './pages/GestionVentas.jsx';
import GestionVentas2 from './pages/GestionVentas2.jsx';
import Ingreso from './pages/Ingreso.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";  //autenticación de usuario


function App() {
  
  return (     
    <Auth0Provider                 //autenticación de ususario con Auth0
      domain="misiontic-proyecto.us.auth0.com"
      clientId="S4qEAxjMrFTFLOLcUoDUNeci3bLHJWag"
      redirectUri= {window.location.origin}
      audience= 'api-autenticacion-DeveloperGroup-mintic'>
        
        <div className="App">
        
        <Router>
        <PrivateLayout>
        
        <Layout>

          <Switch>
          
          <Route path="/src/pages/GestionProductos.jsx">
          
            <GestionProductos/>
          </Route>
          <Route path="/src/pages/GestionUsuario.jsx">
            <GestionUsuario/>
          </Route>
          
          <Route path="/src/pages/GestionVentas.jsx">
          <GestionVentas/>
          </Route> 
          <Route path="/src/pages/GestionVentas2.jsx">
          <GestionVentas2/>
        </Route> 
          
        </Switch>  
          
        </Layout>
     
        <Switch>
        
        <Route path="/src/pages/ingreso.jsx">
          <Ingreso/>
          
        
        </Route> 
        
        </Switch>
        </PrivateLayout>
        </Router>
        
        
      </div>
    </Auth0Provider>   
    
      
      
     
  );
}
export default App;