const Producto = (props) => {
  return (
    // Aquí no debería ir la key
    <li key={props.cod.toString()}>{props.nombre}</li>
  );
};

const App = () => {
  const productos = [
    { cod: 1001, nombre: "Producto-1" },
    { cod: 1002, nombre: "Producto-2" },
    { cod: 1003, nombre: "Producto-3" },
  ];
  const listaDeProductos = productos.map((producto) => (
    // Aquí debería ir la key
    <Producto nombre={producto.nombre} cod={producto.cod} />
  ));
  return <ul>{listaDeProductos}</ul>;
};
export default App;
