import React, { useState } from 'react';
import '../css/Agendamentos.css'; 


function Agendamentos() {
  // Supondo que você tenha um estado para os detalhes do comprador
  const [comprador, setComprador] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
  });

  // E um estado para o método de pagamento
  const [metodoPagamento, setMetodoPagamento] = useState('boleto'); // 'boleto' ou 'cartao'

  // Handler para mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComprador(prevState => ({ ...prevState, [name]: value }));
  };

  // Handler para mudar o método de pagamento
  const handlePaymentChange = (e) => {
    setMetodoPagamento(e.target.value);
  };

  // Handler para o formulário de submissão
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a lógica para processar os dados do agendamento, como enviar para uma API
  };

    return (
     
      <div className="agendamento-container">
        <form onSubmit={handleSubmit}>
          {/* Seção de informações do comprador */}
          <div className="comprador-info">
          <h2>Informações do Comprador</h2>

            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={comprador.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={comprador.cpf}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={comprador.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={comprador.telefone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              value={comprador.cep}
              onChange={handleChange}
            />
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={comprador.endereco}
              onChange={handleChange}
            />
            <input
              type="text"
              name="numero"
              placeholder="Número"
              value={comprador.numero}
              onChange={handleChange}
            />
            <input
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={comprador.complemento}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={comprador.cidade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="estado"
              placeholder="Estado"
              value={comprador.estado}
              onChange={handleChange}
            />
          </div>
  
          {/* Seção de método de pagamento */}
          <div className="pagamento-info">
          <h2>Método de Pagamento</h2>

            <label>
              <input
                type="radio"
                name="metodoPagamento"
                value="boleto"
                checked={metodoPagamento === 'boleto'}
                onChange={handlePaymentChange}
              />
              Boleto
            </label>
            <label>
              <input
                type="radio"
                name="metodoPagamento"
                value="cartao"
                checked={metodoPagamento === 'cartao'}
                onChange={handlePaymentChange}
              />
              Cartão de Crédito
            </label>
            <label>
              <input
                type="radio"
                name="metodoPagamento"
                value="cartao"
                checked={metodoPagamento === 'cartao'}
                onChange={handlePaymentChange}
              />
              Cartão de Debito
            </label>
          </div>
  
          {/* Botão de submissão */}
          <button type="submit">Comprar</button>
        </form>
      </div>
    );
  }
  

export default Agendamentos;
