
import React from "react";
import { Link } from "react-router-dom";
import { RiProductHuntLine } from "react-icons/ri";

const ListaProductos = ({ productos, agregarAlCarrito }) => {

  return (
    <div>
      <h2>Productos disponibles<RiProductHuntLine /></h2>
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
            <Link to={`/ProdDetalles/${product.id}`} style={{ marginLeft: "10px" }}>
              Detalle
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;