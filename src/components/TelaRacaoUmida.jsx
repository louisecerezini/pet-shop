import React from 'react';
import '../css/TelaRacaoUmida.css'; // Ajuste para o caminho correto do seu arquivo CSS
import { useNavigate } from 'react-router-dom';

function TelaRacaoUmida() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // Implemente a lógica de pesquisa aqui
    console.log('Pesquisar');
  };

  // Funções para navegar para a tela de produtos
  const goToGatos = () => {
    navigate('/produtos/gatos'); // Substitua pelo caminho correto da sua rota
  };

  const goToCachorros = () => {
    navigate('/produtos/cachorros'); // Substitua pelo caminho correto da sua rota
  };

  return (
    <div className="racao-umida-container">
      <header className="header">
        <div className="search-bar">
          <input type="search" placeholder="Digite o que você busca" />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div className="shopping-cart">
          <span>🛒</span>
          <span className="cart-count">3</span> {/* Atualize este número conforme necessário */}
        </div>
      </header>
      <main>
        <section className="featured">
          <h2>Ração Úmida</h2>
          <img src="./images/racaoumida.jpg" alt="Ração Úmida" className="featured-image" />
        </section>
        <section className="categories">
          <div className="category">
            <button onClick={goToGatos}>
              {/* Substitua por um ícone ou imagem de gato */}
              <span>🐱</span>
              <h3>Gatos</h3>
            </button>
          </div>
          <div className="category">
            <button onClick={goToCachorros}>
              {/* Substitua por um ícone ou imagem de cachorro */}
              <span>🐶</span>
              <h3>Cachorros</h3>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TelaRacaoUmida;
