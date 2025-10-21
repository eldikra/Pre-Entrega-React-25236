import React, { useState } from 'react';
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
        <input type="name" value={name} placeholder='Nombre' onChange={(e) => setName(e.target.value)} /> {/*input para nombre*/} 
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> {/*input para email*/}
        <button onClick={() => { enviarConsulta(name, email) }}>Enviar</button>
      </form>
    </>

  )
}

export default Contacto;