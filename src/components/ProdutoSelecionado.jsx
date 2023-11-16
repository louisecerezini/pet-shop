import React from 'react';
import '../css/ProdutoSelecionado.css'; // Caminho para o arquivo CSS
import { ShoppingCart } from '@mui/icons-material';
// Importe os componentes de ícones se estiver usando, por exemplo, de alguma biblioteca de ícones
// import { ReactComponent as IconRacaoSeca } from '../icons/racao-seca.svg';

function ProdutoSelecionado() {
  // Você teria que definir um estado para a quantidade de produtos, por exemplo
  const [quantidade, setQuantidade] = React.useState(1);
  const [quantidade2, setQuantidade2] = React.useState(1);
  const [quantidade3, setQuantidade3] = React.useState(1);

  // E as funções para incrementar e decrementar essa quantidade
  const incrementar = () => setQuantidade((q) => q + 1);
  const decrementar = () => setQuantidade((q) => q - 1);
  const incrementar2 = () => setQuantidade2((q) => q + 1);
  const decrementar2 = () => setQuantidade2((q) => q - 1);
  const incrementar3 = () => setQuantidade3((q) => q + 1);
  const decrementar3 = () => setQuantidade3((q) => q - 1);

  return (
    <div className="produto-selecionado-container">
      <aside className="menu-lateral">
        <h3>Menu</h3>
        <ul>
          <li>Ração seca</li>
          <li>Ração úmida</li>
          <li>Banho & tosa</li>
        </ul>
      </aside>
      <div className="tela-inicial">
        <header className="header">
          <div className="search-bar">
            <input
              type="search"
              placeholder="Digite o que você busca"
        
            />
            <button >🔍</button>
          </div>
          <div className="shopping-cart">
            <span></span>
            <ShoppingCart/>
            <span className="cart-count">3</span>
          </div>
        </header>
        <main className="produtos">
          <h1>Ração Seca</h1>
          {/* Lista de produtos. Isso normalmente viria de um estado ou props. */}
          <div className="produto">
            <div className="produto">
              <img src="./images/racaoMonello.jpg" alt="Produto 1" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Ração seca premium
                </p>
                <p className="produto-preco">$97,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementar}>-</button>
                <span>{quantidade}</span>
                <button onClick={incrementar}>+</button>
              </div>
            </div>
          </div>
          <div className="produto">
            <div className="produto">
              <img src="./images/racaoseca2.jpg" alt="Produto 1" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Ração seca premium
                </p>
                <p className="produto-preco">$97,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementar2}>-</button>
                <span>{quantidade2}</span>
                <button onClick={incrementar2}>+</button>
              </div>
            </div>
          </div>
          <div className="produto">
            <div className="produto">
              <img src="./images/racaoNutrillus.jpg" alt="Produto 1" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Ração seca premium
                </p>
                <p className="produto-preco">$97,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementar3}>-</button>
                <span>{quantidade3}</span>
                <button onClick={incrementar3}>+</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProdutoSelecionado;
