import React, { useState } from 'react';
import "./Contato.css"
function Contato() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="container">
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          value={formData.mensagem}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contato