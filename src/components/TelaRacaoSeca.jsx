import React from 'react';
import '../css/TelaRacaoSeca.css';
import { Pets } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function TelaRacaoSeca() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Pesquisar');
  };

  const goToGatos = () => {
    navigate('/produtos/gatos'); 
  };

  // Função para navegar para a tela de produtos de cachorros
  const goToCachorros = () => {
    navigate('/produtos/cachorros'); 
  };

  return (
    <div className="racao-seca-container">
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
          <h2>Ração Seca</h2>
          <img src="./images/cachorrocomgato.jpg" alt="Ração Seca" className="featured-image" />
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

export default TelaRacaoSeca;


