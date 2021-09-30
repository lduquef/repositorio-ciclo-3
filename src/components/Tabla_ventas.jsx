import "../Estilos/bootstrap.css"
const Tabla_ventas = ()=>{
    return(
<div>
        <table class="table table-hover">
  <thead>
    <tr class="table-dark">
      <th scope="col">Referencia</th>
      <th scope="col">producto</th>
      <th scope="col">cantidad</th>
      <th scope="col">Precio Unitario</th>
      <th scope="col">subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-primary">
      <th scope="row">1</th>
      <td>producto1</td>
      <td>#</td>
      <td>$----</td>
      <td>$----</td>
    </tr>
    <tr class="table-secondary" >
    <th scope="row">2</th>
      <td>producto2</td>
      <td>#</td>
      <td>$----</td>
      <td>$----</td>
    </tr>
    <tr class="table-primary">
      <th scope="row">3</th>
      <td>producto3</td>
      <td>#</td>
      <td>$----</td>
      <td>$----</td>
    </tr>
    <tr class="table-secondary" >
    <th scope="row">4</th>
      <td>producto4</td>
      <td>#</td>
      <td>$----</td>
      <td>$----</td>
    </tr> 
  </tbody>
</table>

<table class="table table-hover">
<thead>
    <tr class="table-dark">
    <th>
        Unidades Totales 
    </th>
    <th>
        Total
    </th>
    </tr>
</thead>
<tbody>
<tr class="table-secondary" >  
    <th scope="row">3</th>
    <td>$ ----</td>
</tr>
</tbody>
</table>
<div class="form-group">
      <label for="exampleSelect1" class="form-label mt-4">Estados Ventas</label>
      <select class="form-select" id="exampleSelect1">
        <option>cancelado</option>
        <option>En Proceso</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
</div>
    );
}
export default Tabla_ventas