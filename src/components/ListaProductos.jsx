
import React from "react";

const ListaProductos = ({ productos, agregarAlCarrito }) => {

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {product.prodName} - ${product.prodPrice}
            <button
              onClick={() => agregarAlCarrito(product)}
              style={{ marginLeft: "10px" }}
            >
              Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;