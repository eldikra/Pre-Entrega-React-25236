import { useState } from "react";
import Productos from "../components/Productos";
import Carrito from "../components/Carrito";
import Nav from "../components/Nav";

const Inicio = () => {
  const [carrito, setCarrito] = useState([]); // Estado para manejar los productos en el carrito
  
  const agregarAlCarrito = (producto) => { // Función para agregar productos al carrito
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (productoId) => { // Función para eliminar productos del carrito
    setCarrito(carrito.filter((_,item) => item != productoId));// Usamos el índice como clave temporalmente
  };


  return (
    <div>
      <Nav />
      <Productos agregarAlCarrito={agregarAlCarrito} />
      <hr />
      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </div>
  );
};

export default Inicio;
