
import './App.css';
import Developer from "./img/developer.jpg";


function App() {
  return (
  <div className="App">
    <header>
      <nav class="menuCSS3">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Navegacion</a>
          <ul>
            <li><a href="#">Usuarios</a></li>
            <li><a href="#">Gestion de Ventas</a></li>
            <li><a href="#">Roles de Usario</a></li>
            <li><a href="#">Mas Ventas</a></li>
          </ul>
            </li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Salir</a></li>
            </ul>
            
            </nav>
            <div>
            <img className="avatar" src={Developer} />
          </div>  
            
          </header>
         
          <section>
          <div>
            ACA SE ESCRIBE EL CODIGO
          </div>
          </section>
        
          <footer>
            <p>pbx:54513621651651</p>
            <p>email: devgroup@mail.com</p>

            <ul class="social-icons">
              <li><a href="https://www.facebook.com/" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
              <li><a href="https://github.com/lduquef/repositorio-ciclo-3" class="social-icon"> <i class="fa fa-github"></i></a></li>
            </ul>
          </footer>

        
      </div>
  );
}

export default App;
