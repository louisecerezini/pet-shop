// Importações necessárias para o componente.
import React from 'react'; // React para criar o componente.
import '../css/TelaInicial.css'; // Importa o arquivo CSS para estilização.
import { Pets, ShoppingCart, Shower } from '@mui/icons-material'; // Ícones do Material UI.
import { useState } from 'react'; // useState do React para gerenciar estados.
import { useNavigate } from 'react-router-dom'; // useNavigate do react-router-dom para navegação.

// Definição do componente funcional TelaInicial.
function TelaInicial() {
  // Estado para armazenar o termo de pesquisa.
  const [searchTerm, setSearchTerm] = useState('');

  // Hook para navegação.
  const navigate = useNavigate();

  // Função para lidar com a ação de pesquisa.
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Pesquisar');
  };

  // Função para lidar com mudanças no campo de pesquisa.
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Funções para navegar para diferentes telas.
  const goToFood = () => {
    navigate('/telaracaoseca');
  };

  const goToFood2 = () => {
    navigate('/telaracaoumida');
  };

  const goToFood3 = () => {
    navigate('/banhotosa');
  };

  // Renderização do componente.
  return (
    <div className="tela-inicial">
      {/* Cabeçalho com barra de pesquisa e ícone do carrinho de compras */}
      <header className="header">
        <div className="search-bar">
          {/* ... (barra de pesquisa e carrinho de compras) */}
          <input
            type="search"
            placeholder="Digite o que você busca"
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div className="shopping-cart">
          <span></span>
          <ShoppingCart />
          <span className="cart-count">3</span>
        </div>
      </header>
      <main>
        {/* Seção principal com imagem e categorias de produtos/serviços */}
        <section>
          <h2>Ração, Banho & Tosa para seus pets</h2>
          <img src="./images/bolt.jpg" alt="Pet" className="featured" />
        </section>
        <section className="categories">
          <div className="category">
            <button onClick={goToFood}>
              <Pets />
              <h3>Ração seca</h3>
            </button>
          </div>
          <div className="category">
            <button onClick={goToFood2}>
              <Pets />
              <h3>Ração úmida</h3>
            </button>
          </div>
          <div className="category">
            <button onClick={goToFood3}>
              <Shower />
              <h3>Banho & tosa</h3>
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

export default TelaInicial;
