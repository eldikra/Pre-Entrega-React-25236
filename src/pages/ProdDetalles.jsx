// import { useState , useEffect } from "react";
// const ProdDetalles = () => {
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const productId = window.location.pathname.split("/").pop();
//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 const data = await response.json();
//                 console.log("DATAAAAAAAAAA", data);
//                 setProduct(data);
//             }
//             catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [productId]);
//     if (loading) {
//         return <div>Loading...</div>;
//     }
//     if (error) {
//         return <div>Error: {error}</div>;
//     }
//     return (
//         <>
//         <h2>HOLAAAAAA</h2>
//         </>
//     );
// };
// export default ProdDetalles;
