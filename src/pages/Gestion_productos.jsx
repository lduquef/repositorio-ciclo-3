import React  from "react";
import "../Estilos/producto.css"
const Gestion_productos = () =>{
    return(<div>
        <div className="conten">
            <section className="login_Developer_1"> 
              <h1>PRODUCTOS</h1>
               <form>
               <label for="Constraseña">Buscar producto</label>
               <input type="text" placeholder="Ingrese producto"></input>
              <input type="submit" value="Buscar"></input> 
               Productos
              <select>
                  <option>Producto1</option>
                  <option>Producto2</option>
                  <option>Producto3</option>
                  <option>Producto4</option>
                  </select>    
              <div class="foot-lnk">            
               </div>    
            </form>
            </section>
            <section className="login_Developer_2"> 
          
              <form>
                <h3>Nuevo producto</h3>
                  <section>
                  <label for="producto">ingrese producto</label>
                  <label for="producto">ingrese id</label>
                  <label for="producto">ingrese precio</label>
                  </section>
                  <div>
                  <input type="text" placeholder="NuevoProducto"></input>     
                  <input type="id" placeholder="IdProducto"></input>
                  <input type="id" placeholder="Precio"></input>
                  <input type="submit" value="Ingresar"></input>
                  </div>
              </form>
                 <table>
                 <caption>DETALLES DEL PRODUCTO SELECCIONADO</caption>
                  <tr> <th>id producto</th> <th>Detalle Producto</th> <th>Valor Unitario</th>
                  <th>Estado disponible</th> <th>Estado NO disponible</th> <th>Editar</th><th>Actualizar</th>
                  </tr>
                  <tr> <td> JO0001</td> <td>Tela cortada india</td> <td>$ 34.000</td>
                  <td>SI</td> <td>NO</td>  <td><a class="botonedit" href="#">Editar</a></td>  <td><a class="botonedit" href="#">Actualizar</a></td>
                  </tr>
                  <tr> <td>JO0002</td> <td>PLantilla Zapato</td> <td>$ 12.000</td>
                  <td>SI</td> <td>NO</td> <td><a class="botonedit" href="#">Editar</a></td>  <td><a class="botonedit" href="#">Actualizar</a></td>
                  </tr>

                   
                 </table>
            </section>

          </div>
    </div>  )
}
export default Gestion_productos