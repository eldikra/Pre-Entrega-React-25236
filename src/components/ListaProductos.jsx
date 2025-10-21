
import { Link } from "react-router-dom";
import { RiProductHuntLine } from "react-icons/ri";
import "../Styles/ListaProductos.module.css";

const ListaProductos = ({ productos, agregarAlCarrito }) => {
  return (
    <div>
      <h2>
        Productos disponibles
        <RiProductHuntLine />
      </h2>
      <div className="productos-grid">
        {productos.map((product) => (
          <div className="producto-card" key={product.id}>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              {product.prodName}
            </div>
            <div style={{ marginBottom: "8px" }}>${product.prodPrice}</div>
            <button
              onClick={() => agregarAlCarrito(product)}
              style={{ marginBottom: "8px" }}
            >
              Agregar
            </button>
            <Link to={`/ProdDetalles/${product.id}`}>Detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;