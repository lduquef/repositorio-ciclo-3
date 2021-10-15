import Layout from './Layouts/layout.jsx';
import './Estilos/Style.css';
import "./Estilos/estilos2.css"
import GestionProductos from './pages/GestionProductos.jsx';
import GestionUsuario from './pages/GestionUsuario.jsx';
import GestionVentas from './pages/GestionVentas.jsx';
import GestionVentas2 from './pages/GestionVentas2.jsx';
import Ingreso from './pages/Ingreso.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
  <div className="App">
    <Router>
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
      <Route path="/src/pages/ingreso.jsx">
      <Ingreso/>
    </Route>
    </Switch>    
    </Layout>
    </Router>
  </div>
  );
}
export default App;