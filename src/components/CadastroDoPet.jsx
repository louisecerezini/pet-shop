import React, { useState } from 'react';
import '../css/CadastroDoPet.css'; // Substitua pelo caminho correto do seu arquivo CSS
import { useNavigate } from 'react-router-dom'

function CadastroDoPet() {
  const [pet, setPet] = useState({
    nome: '',
    tipo: '',
    raca: '',
    temperamento: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet({
      ...pet,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do pet para cadastro:', pet);
  
   
    if (!pet.nome || !pet.tipo || !pet.raca || !pet.temperamento) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }
    
    alert('Cadastro do pet realizado com sucesso!');
  
    //  limpar o formulário após o "envio" bem-sucedido
    setPet({
      nome: '',
      tipo: '',
      raca: '',
      temperamento: ''
    });

    
    const saveUser = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      user.pet=pet;
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/TelaInicial');
    };
    saveUser();
  };

  return (
    <div className="cadastro-pet-container">
      <h2>Cadastro do Pet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={pet.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo"
          value={pet.tipo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="raca"
          placeholder="Raça"
          value={pet.raca}
          onChange={handleChange}
        />
        <input
          type="text"
          name="temperamento"
          placeholder="Temperamento"
          value={pet.temperamento}
          onChange={handleChange}
        />
        <button type="submit"
         className="cadastro-pet-btn"
         >Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroDoPet;
