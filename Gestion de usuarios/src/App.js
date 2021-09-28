import Layout from './Layouts/layout.jsx';
import './App.css';
import Gestion_productos from './pages/Gestion_productos.jsx';
import Gestion_usuario from './pages/Gestion_usuario.jsx';
import Gestion_ventas from './pages/Gestion_ventas.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <div lassName="App">
    <Router>
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
    </Switch>    
    </Layout>
    </Router>
  </div>
  );
}
export default App;