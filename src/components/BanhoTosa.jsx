import React from 'react';
import '../css/BanhoTosa.css'; // Certifique-se de ter o arquivo de estilos correspondente
import { useNavigate } from 'react-router-dom';
import { Pets } from '@mui/icons-material';

function BanhoETosa() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // Implemente a lógica de pesquisa aqui
    console.log('Pesquisar');
  };

  const goToGatos = () => {
    navigate('/banhoetosa/gatos'); // Substitua pelo caminho correto da sua rota
  };

  const goToCachorros = () => {
    navigate('/banhoetosa/cachorros'); // Substitua pelo caminho correto da sua rota
  };

  return (
    <div className="banho-tosa-container">
      <header className="header">
        <div className="search-bar">
          <input type="search" placeholder="Digite o que você busca" />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div className="shopping-cart">
          <span>🛒</span>
          <span className="cart-count">3</span>
        </div>
      </header>
      <main>
        <section className="featured">
          <h2>Banho & Tosa</h2>
          <img src="./images/banhoTosa.jpg" alt="Banho e Tosa" className="featured-image" />
        </section>
        <section className="categories">
          <div className="category">
          <button onClick={goToGatos}>
              <Pets />
              <h3>Gatos</h3>
            </button>
          </div>
          <div className="category">
          <button onClick={goToCachorros}>
              <Pets />
              <h3>Cachorros</h3>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BanhoETosa;