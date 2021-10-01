import "../Estilos/bootstrap.css"
const Tabla_ventas = ()=>{
    return(        
<div>
        <table class="table table-hover">
  <thead>
  <div class="form-group">
           <select class="form-select" id="exampleSelect1">
        <option>Buscar Producto</option>
        <div class="form-group">
           <select class="form-select" id="exampleSelect1">
        <option>Producto</option>
            </select>
    </div>
        <option>Buscar ID</option>
        <option>Cantidad</option>
        </select>
    </div>

    <tr class="table-dark">
      <th scope="col">ID producto</th>
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
    <th>
        Estado Venta
    </th>
    </tr>
</thead>
<tbody>
<tr class="table-secondary" >  
    <th scope="row">3</th>
    <td>$ ----</td>
    <div class="form-group">
           <select class="form-select" id="exampleSelect1">
        <option>En Proceso</option>
        <option>Cancelado</option>
        <option>Entregado</option>
        </select>
    </div>

</tr>
</tbody>
</table>

</div>
    );
}
export default Tabla_ventas