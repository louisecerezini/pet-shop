// Importações necessárias para o componente.
import React, { useState } from 'react'; // useState do React para gerenciar estados.
import '../css/Cadastro.css'; // Arquivo CSS para estilização.
import { useNavigate } from 'react-router-dom'; // useNavigate do react-router-dom para navegação.

// Definição do componente funcional Cadastro.
function Cadastro() {
  // Estado 'form' para armazenar os dados do formulário.
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    numero: '',
    rua: '',
    cidade: '',
    telefone: '',
  });
  // Hook para navegação.
  const navigate = useNavigate();

  // Função para lidar com mudanças nos campos do formulário.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Função para salvar o usuário no localStorage e navegar para outra rota.
  const saveUser = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    user.cadastro = form;
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/cadastroDoPet');
  };

  // Função para lidar com o envio do formulário.
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Dados para cadastro:', form);

    // Simula o envio de dados para um servidor.
    try {
      await simulateAPICall(form);
      alert('Cadastro realizado com sucesso!');
      // Aqui você pode limpar o formulário ou redirecionar o usuário.
    } catch (error) {
      alert('Falha ao realizar o cadastro. Tente novamente mais tarde.');
      console.error('Erro ao enviar dados de cadastro:', error);
    }
  };

  // Função para simular uma chamada de API.
  function simulateAPICall(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simula uma verificação: se há um email, a chamada "sucede".
        if (data.email) {
          console.log('Dados enviados para a API:', data);
          resolve('Sucesso');
        } else {
          reject('Falha');
        }
      }, 1000); // Simula um atraso de 1 segundo.
    });
  }

  // Renderização do formulário.
  return (
    <div className="cadastro-container">
      <h2>Cadastro de clientes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={form.cep}
          onChange={handleChange}
        />
        <input
          type="text"
          name="numero"
          placeholder="Número"
          value={form.numero}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rua"
          placeholder="Rua"
          value={form.rua}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
        />
        <button type="submit" className="cadastro-btn" onClick={saveUser}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
