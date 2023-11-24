// Importações necessárias para o componente.
import React, { useState } from 'react'; // useState do React para gerenciar estados.
import '../css/CadastroDoPet.css'; // Importa o arquivo CSS para estilização.
import { useNavigate } from 'react-router-dom'; // useNavigate do react-router-dom para navegação.

// Definição do componente funcional CadastroDoPet.
function CadastroDoPet() {
  // Estado 'pet' para armazenar os dados do pet.
  const [pet, setPet] = useState({
    nome: '',
    tipo: '',
    raca: '',
    temperamento: '',
  });
  // Hook para navegação.
  const navigate = useNavigate();

  // Função para lidar com mudanças nos campos do formulário.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do pet para cadastro:', pet);

    // Verifica se todos os campos estão preenchidos.
    if (!pet.nome || !pet.tipo || !pet.raca || !pet.temperamento) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    // Alerta de sucesso no cadastro.
    alert('Cadastro do pet realizado com sucesso!');

    // Limpa o formulário após o "envio" bem-sucedido.
    setPet({
      nome: '',
      tipo: '',
      raca: '',
      temperamento: '',
    });

    // Função para salvar o pet no localStorage e navegar para outra rota.
    const saveUser = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      user.pet = pet;
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/TelaInicial');
    };
    saveUser();
  };

  // Renderização do formulário.
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
        <button type="submit" className="cadastro-pet-btn">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroDoPet;
