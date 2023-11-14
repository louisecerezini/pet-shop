import React from 'react';
import '../css/TelaInicial.css'; 
import { Pets, ShoppingCart, Shower } from '@mui/icons-material';
import  { useState } from 'react';



function TelaInicial() {
  const [searchTerm, setSearchTerm] = useState(''); // estado para armazenar o valor 

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Pesquisar');
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="tela-inicial">
      <header className="header">
        <div className="search-bar">
          <input type="search" placeholder="Digite o que você busca" onChange={handleInputChange} />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div className="shopping-cart">
          <span></span>
          <ShoppingCart/>
          <span className="cart-count">3</span> 
        </div>
      </header>
      <main>
        <section className="featured">
          <h2>Ração, Banho & Tosa para seus pets</h2>
          <img src="./images/bolt.jpg"alt="Pet" className="featured-image" />
        </section>
        <section className="categories">
          <div className="category">
            <span></span>
            <Pets/>
            <h3>Ração seca</h3>
          </div>
          <div className="category">
            <span></span>
            <Pets/>
            <h3>Ração úmida</h3>
          </div>
          <div className="category">
            <span></span>
            <Shower/>
            <h3>Banho & tosa</h3>
          </div>
        </section>
      </main>
      <footer className="footer">
    Direitos reservados à PetShopLouise©
  </footer>
    </div>
  );
}

export default TelaInicial;
