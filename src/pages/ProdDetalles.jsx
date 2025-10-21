import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";

function Descripcion() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://68e5853321dd31f22cc1fc2b.mockapi.io/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, [id]);

  if (!producto) return <div>Cargando detalles ...</div>;

  return (
    <div>
      <Nav />
      <h2>{producto.prodName}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.prodPrice}</p>
      {/* Puedes agregar más detalles aquí */}
    </div>
  );
}

export default Descripcion;