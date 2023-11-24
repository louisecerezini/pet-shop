// Importações necessárias para o componente.
import React from 'react'; // React para criar o componente.
import '../css/TelaRacaoUmida.css'; // Importa o arquivo CSS para estilização.
import { useNavigate } from 'react-router-dom'; // useNavigate do react-router-dom para navegação.
import { Pets } from '@mui/icons-material'; // Ícone do Material UI.

// Definição do componente funcional TelaRacaoUmida.
function TelaRacaoUmida() {
  // Hook para navegação.
  const navigate = useNavigate();

  // Função para lidar com a ação de pesquisa.
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Pesquisar');
  };

  // Função para navegar para a página de produto selecionado.
  const goToProducts = () => {
    navigate('/produtoselecionado');
  };

  // Renderização do componente.
  return (
    <div className="racao-umida-container">
      {/* Cabeçalho com barra de pesquisa e ícone do carrinho de compras */}
      <header className="header">
        <div className="search-bar">
          {/* ... (barra de pesquisa e carrinho de compras) */}
          <input type="search" placeholder="Digite o que você busca" />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div className="shopping-cart">
          <span>🛒</span>
          <span className="cart-count">3</span>
        </div>
      </header>
      <main>
        {/* Seção destacada com título e imagem relacionada a ração úmida */}
        <section className="featured">
          <h2>Ração Úmida</h2>
          <img
            src="./images/racaoumida.jpg"
            alt="Ração Úmida"
            className="featured-image"
          />
        </section>
        <section className="categories">
          <div className="category">
            <button onClick={goToProducts}>
              <Pets />
              <h3>Produtos</h3>
            </button>
          </div>
        </section>
      </main>
      {/* Rodapé com informações de direitos autorais e contato */}
      <footer className="footer">
        Direitos reservados à PetShopLouise© Informações de contato:
        PetShopLouise@gmail.com
      </footer>
    </div>
  );
}

export default TelaRacaoUmida;
