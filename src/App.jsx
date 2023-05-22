const App = () => {
  const productos = [
    {cod: 1001, nombre: "Producto-1"}, 
    {cod: 1002, nombre: "Producto-2"},
    {cod: 1003, nombre: "Producto-3"}
	];
  const listaProductos = productos.map((producto) => {
			return (
        <li key={producto.cod.toString()}>
          { producto.nombre }
        </li>
      )
	});

  return (
    <ul>{ listaProductos }</ul>
  )
}
export default App;

