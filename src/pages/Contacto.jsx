import React, { use, useState } from 'react';
import Nav from '../components/Nav';

const Contacto = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const enviarConsulta = (name,email) => {
    alert(`Gracias ${name}, nos contactaremos a la brevedad al email ${email}`);
  }
  return (
    <>
    <Nav />
      <div style={{ padding: "20px" }}>
        <h1>📞 Página de Contacto</h1>
        <p>Podés comunicarte con nosotros mediante este formulario o por email.</p>
      </div>
      <form action="">
        <input type="Name" />
        <input type="Email" />
        <button onClick={() => { enviarConsulta(name, email) }}>Enviar</button>
      </form>
    </>

  )
}

export default Contacto;