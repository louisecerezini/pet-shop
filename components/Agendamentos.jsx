import React, { useState } from 'react';
import '../css/Agendamentos.css'; // Importando o CSS para o componente

function Agendamentos() {
  // Estados do componente
  const [metodoPagamento, setMetodoPagamento] = useState('boleto'); // Estado para o método de pagamento, padrão 'boleto'
  const [selectedDate, setSelectedDate] = useState(''); // Estado para a data selecionada
  const [selectedTime, setSelectedTime] = useState(''); // Estado para a hora selecionada

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComprador((prevState) => ({ ...prevState, [name]: value }));
  };

  // Função para alterar o método de pagamento
  const handlePaymentChange = (e) => {
    setMetodoPagamento(e.target.value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    console.log('Date selected:', selectedDate); // Log da data selecionada
    console.log('Time selected:', selectedTime); // Log da hora selecionada
  };

  return (
    // Estrutura HTML do componente
    <div className="agendamento-container">
      <h2>Agendamento Banho & Tosa</h2>
      <form onSubmit={handleSubmit}>
        {/* Seção de agendamentos */}
        <div className="agendamentos">
          <p> Precisa do serviço de Agendamento?</p>
          <select>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {/* Input para data */}
        <label>
          Date:
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>

        {/* Input para hora */}
        <label>
          Time:
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </label>

        {/* Seção de Tele Busca */}
        <div className="tele-busca">
          <p> Precisa dos serviços de Tele Busca?</p>
          <select>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {/* Seção de método de pagamento */}
        <div className="pagamento-info">
          <h2>Método de Pagamento</h2>
          {/* Opções de pagamento */}
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
              value="debito"
              checked={metodoPagamento === 'debito'}
              onChange={handlePaymentChange}
            />
            Cartão de Débito
          </label>
        </div>

        <button type="submit">Comprar</button>
      </form>
    </div>
  );
}

export default Agendamentos; // Exportando o componente
