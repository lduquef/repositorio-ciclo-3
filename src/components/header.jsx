import Developer from "../img/developer.jpg";
import { Link } from "react-router-dom";
const Header2 =() =>{
    return (
    <header>
        <li> <Link to="../../public/index.html"> <img className="avatar" src={Developer} />
        </Link> </li>
            
      <nav class="menuCSS3">
        <ul>
          <li> <Link to="../../public/index.html"> Inicio</Link></li>
          <li><a href="#">Navegacion</a>
          <ul>
            <li><Link to="/src/pages/Gestion_usuario.jsx"> Usuarios </Link> </li>
            <li><Link to="/src/pages/Gestion_ventas.jsx"> Ventas </Link></li>
            <li><Link to="/src/pages/Gestion_ventas.jsx"> productos </Link></li>
            <li><a href="#">Mas Ventas</a></li>
            <br />
        </ul>
            </li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Salir</a></li>
            </ul>
            
        </nav>
    </header>
    )
}
export default Header2