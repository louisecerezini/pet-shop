import React, { useState } from 'react';
import '../css/Agendamentos.css'; 



function Agendamentos() {
  // Supondo que você tenha um estado para os detalhes do comprador


  const [metodoPagamento, setMetodoPagamento] = useState('boleto');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComprador((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handler to change payment method
  const handlePaymentChange = (e) => {
    setMetodoPagamento(e.target.value);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Date selected:', selectedDate);
    console.log('Time selected:', selectedTime);
    // Logic to handle submission goes here
  };

  return (
    <div className="agendamento-container">
      <h2>Agendamento Banho & Tosa</h2>
      <form onSubmit={handleSubmit}>
        {/* Buyer information section */}
        {/* ... add input fields for buyer details here ... */}

        {/* Date and Time Selection */}
        <label>
          Date:
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </label>

        {/* Tele search services */}
        <div className="tele-busca">
          <p> Precisa dos serviços de Tele Busca?</p>
          <select>
            <option value = 'Sim'> Sim</option>
            <option value = 'Não'> Não</option>
          </select>
          <button type="submit">Enviar</button>
        </div>

        {/* Payment Method Section */}
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
              value="debito" // Fixed value to "debito" for debit card
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

export default Agendamentos;