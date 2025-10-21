import React, { use, useState } from 'react';
import Nav from '../components/Nav';
import { useSearchParams } from 'react-router-dom';

const Contacto = () => {
  const [name,setName] = useState("");
  return (
    <>
    <Nav />
      <div style={{ padding: "20px" }}>
        <h1>📞 Página de Contacto</h1>
        <p>Podés comunicarte con nosotros mediante este formulario o por email.</p>
      </div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <button onClick>Enviar</button>
      </form>
    </>

  )
}

export default Contacto;