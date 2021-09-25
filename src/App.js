import './App.css';
import Developer from "./img/developer.jpg";


function App() {
  return (
    <div className="conten">
    <div className="App">
      <section className="login_Developer">
      <img class="avatar" src={Developer} alt="Logo_del_grupo"/>
      <h1>Iniciar Sesion</h1>
      <form>
      <label for="nombre_usuario">Nombre de usuario</label>
      <input type="text" placeholder="Ingrese Nombre de Usuario"></input>
      <label for="Constraseña">Constraseña</label>
      <input type="password" placeholder="Ingrese su contraseña"></input>
      <input type="submit" value="Ingresar"></input>
      

      </form>
      </section>
    </div>
    </div>
  );
}

export default App;
