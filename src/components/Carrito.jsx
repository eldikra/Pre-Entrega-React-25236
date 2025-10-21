import { FiShoppingBag } from "react-icons/fi";

const Carrito = ({ carrito, eliminarDelCarrito }) => { // Recibe el carrito, la función para eliminar productos y la función para vaciar el carrito como props
  return (
    <div>
      <h2>Carrito de Compras <FiShoppingBag /></h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <p>Productos en el carrito:</p>
          <ul>
            {carrito.map((producto, index) => (
              <div key={index}>
                {producto.prodName} - ${producto.prodPrice}
                <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              </div>
            ))}
          </ul>
          
        </>
      )}
    </div>
  );
};

export default Carrito;
