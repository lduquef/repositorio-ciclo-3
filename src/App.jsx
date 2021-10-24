import Layout from './Layouts/layout.jsx';
import PrivateLayout from './Layouts/PrivateLayout.jsx';

import './Estilos/Style.css';
import "./Estilos/estilos2.css"
import Gestion_productos from './pages/Gestion_productos.jsx';
import Gestion_usuario from './pages/Gestion_usuario.jsx';
import Gestion_ventas from './pages/Gestion_ventas.jsx';
import GestionVentas2 from './pages/GestionVentas2.jsx';
import Ingreso from './pages/Ingreso.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";  //autenticación de usuario


function App() {
  
  return (     
    <Auth0Provider                 //autenticación de ususario con Auth0
      domain="misiontic-proyecto.us.auth0.com"
      clientId="S4qEAxjMrFTFLOLcUoDUNeci3bLHJWag"
      redirectUri= {window.location.origin}>
        
        <div className="App">
        
        <Router>
        <PrivateLayout>
        
        <Layout>

          <Switch>
          
          <Route path="/src/pages/Gestion_productos.jsx">
          
            <Gestion_productos/>
          </Route>
          <Route path="/src/pages/Gestion_usuario.jsx">
            <Gestion_usuario/>
          </Route>
          
          <Route path="/src/pages/Gestion_ventas.jsx">
          <Gestion_ventas/>
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