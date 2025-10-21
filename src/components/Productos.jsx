import { useState, useEffect } from "react";
import ListaProductos from "./ListaProductos";


const Productos = ({agregarAlCarrito}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://68e5853321dd31f22cc1fc2b.mockapi.io/api/products') //Hace el fetch a la API
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        return response.json();
        
      }) // Convierte la respuesta a JSON solo si es exitosa
      .then(data => { setProductos(data); setLoading(false); }) // Guarda los datos en el estado por medio de setProductos
      .catch(err => setError(err.message)) // mensaje de error detallado
      .finally(() => setLoading(false)); // Finaliza el loading
  }, []);

  if (loading) return <p>Cargando productos...</p>; // Muestra un mensaje mientras se cargan los productos
  if (error) return <p>{error}</p>; // Muestra un mensaje de error si ocurre un problema
  return (
    <>
    <ListaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} /> 
    </>
  );
}
export default Productos;
