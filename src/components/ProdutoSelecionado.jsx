
import '../css/ProdutoSelecionado.css'; 
import { ShoppingCart } from '@mui/icons-material';
import React, { useEffect } from 'react';

function ProdutoSelecionado() {

  
  const [quantidadeRacaoSeca, setQuantidadeRacaoSeca] = React.useState(1);
  const [quantidadeRacaoSeca2, setQuantidadeRacaoSeca2] = React.useState(1);
  const [quantidadeRacaoSeca3, setQuantidadeRacaoSeca3] = React.useState(1);

  const [quantidadeRacaUmida, setQuantidadeRacaUmida] = React.useState(1);
  const [quantidadeRacaUmida2, setQuantidadeRacaUmida2] = React.useState(1);
  const [quantidadeRacaUmida3, setQuantidadeRacaUmida3] = React.useState(1);

  const [quantidadeBanhoTosa, setQuantidadeBanhoTosa] = React.useState(1);
  const [quantidadeBanhoTosa2, setQuantidadeBanhoTosa2] = React.useState(1);
  const [quantidadeBanhoTosa3, setQuantidadeBanhoTosa3] = React.useState(1);


  const [menuSelecionado, setMenuSelecionado] = React.useState('racaoSeca'); //racaoSeca, racaoUmida,banhoTosa

  // E as funções para incrementar e decrementar essa quantidade
  const incrementarRacaoSeca = () => setQuantidadeRacaoSeca((q) => q + 1);
  const decrementarRacaoSeca = () => setQuantidadeRacaoSeca((q) => q - 1);
  const incrementarRacaoSeca2 = () => setQuantidadeRacaoSeca2((q) => q + 1);
  const decrementarRacaoSeca2 = () => setQuantidadeRacaoSeca2((q) => q - 1);
  const incrementarRacaoSeca3 = () => setQuantidadeRacaoSeca3((q) => q + 1);
  const decrementarRacaoSeca3 = () => setQuantidadeRacaoSeca3((q) => q - 1);

  const incrementarRacaoUmida = () => setQuantidadeRacaUmida((q) => q + 1);
  const decrementarRacaoUmida = () => setQuantidadeRacaUmida((q) => q - 1);
  const incrementarRacaoUmida2 = () => setQuantidadeRacaUmida2((q) => q + 1);
  const decrementarRacaoUmida2 = () => setQuantidadeRacaUmida2((q) => q - 1);
  const incrementarRacaoUmida3 = () => setQuantidadeRacaUmida3((q) => q + 1);
  const decrementarRacaoUmida3 = () => setQuantidadeRacaUmida3((q) => q - 1);

  const incrementarBanhoTosa = () => setQuantidadeBanhoTosa((q) => q + 1);
  const decrementarBanhoTosa = () => setQuantidadeBanhoTosa((q) => q - 1);
  const incrementarBanhoTosa2 = () => setQuantidadeBanhoTosa2((q) => q + 1);
  const decrementarBanhoTosa2 = () => setQuantidadeBanhoTosa2((q) => q - 1);
  const incrementarBanhoTosa3 = () => setQuantidadeBanhoTosa3((q) => q + 1);
  const decrementarBanhoTosa3 = () => setQuantidadeBanhoTosa3((q) => q - 1);


   useEffect(() => {
    try {
      // Tenta recuperar e parsear os produtos do localStorage
      const savedProdutos = localStorage.getItem('produtos');
      if (savedProdutos) {
        const produtos = JSON.parse(savedProdutos);
  
        // Atualiza os estados se os dados estiverem presentes
        if (produtos.racaoSeca) {
          setQuantidadeRacaoSeca(produtos.racaoSeca.quantidadeRacaoSeca || 1);
          setQuantidadeRacaoSeca2(produtos.racaoSeca.quantidadeRacaoSeca2 || 1);
          setQuantidadeRacaoSeca3(produtos.racaoSeca.quantidadeRacaoSeca3 || 1);
        }
        if (produtos.racaoUmida) {
          setQuantidadeRacaUmida(produtos.racaoUmida.quantidadeRacaoUmida || 1);
          setQuantidadeRacaUmida2(produtos.racaoUmida.quantidadeRacaoUmida2 || 1);
          setQuantidadeRacaUmida3(produtos.racaoUmida.quantidadeRacaoUmida3 || 1);
        }
        if (produtos.banhoTosa) {
          setQuantidadeBanhoTosa(produtos.banhoTosa.quantidadeBanhoTosa || 1);
          setQuantidadeBanhoTosa2(produtos.banhoTosa.quantidadeBanhoTosa2 || 1);
          setQuantidadeBanhoTosa3(produtos.banhoTosa.quantidadeBanhoTosa3 || 1);
        }
      }
    } catch (error) {
      // Captura qualquer erro que ocorra durante o parsing do localStorage
      console.error("Erro ao carregar os dados do localStorage:", error);
    }
  }, []);

  useEffect(() => {
    const produtos = {
      racaoSeca: {
        quantidadeRacaoSeca,
        imagemRacaoSeca:'racaoMonello.jpg',
        quantidadeRacaoSeca2,
        imagemRacaoSeca2:'racaoMonello.jpg',
        quantidadeRacaoSeca3,
        imagemRacaoSeca3:'racaoMonello.jpg',
      },
      racaoUmida: {
        quantidadeRacaUmida,
        quantidadeRacaUmida2,
        quantidadeRacaUmida3,
      },
      banhoTosa: {
        quantidadeBanhoTosa,
        quantidadeBanhoTosa2,
        quantidadeBanhoTosa3,
      }
    };

    localStorage.setItem('produtos', JSON.stringify(produtos));
  }, [
    quantidadeRacaoSeca,
    quantidadeRacaoSeca2,
    quantidadeRacaoSeca3,
    quantidadeRacaUmida,
    quantidadeRacaUmida2,
    quantidadeRacaUmida3,
    quantidadeBanhoTosa,
    quantidadeBanhoTosa2,
    quantidadeBanhoTosa3,
    menuSelecionado
  ]);

  const getContent = () => {
    if (menuSelecionado === 'racaoSeca'){
      return (
        <>
          <h1>Ração Seca</h1>

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
                <button onClick={decrementarRacaoSeca}>-</button>
                <span>{quantidadeRacaoSeca}</span>
                <button onClick={incrementarRacaoSeca}>+</button>
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
                <p className="produto-preco">$100,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarRacaoSeca2}>-</button>
                <span>{quantidadeRacaoSeca2}</span>
                <button onClick={incrementarRacaoSeca2}>+</button>
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
                <p className="produto-preco">$120,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarRacaoSeca3}>-</button>
                <span>{quantidadeRacaoSeca3}</span>
                <button onClick={incrementarRacaoSeca3}>+</button>
              </div>
            </div>
          </div>
        </>
      );
    }
    else if(menuSelecionado === 'racaoUmida'){
      return (
        <>
          <h1>Ração Umida</h1>

          <div className="produto">
            <div className="produto">
              <img src="./images/Racaoumidagato.jpg" alt="Produto 1" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Ração umida premium
                </p>
                <p className="produto-preco">$150,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarRacaoUmida}>-</button>
                <span>{quantidadeRacaUmida}</span>
                <button onClick={incrementarRacaoUmida}>+</button>
              </div>
            </div>
          </div>
          <div className="produto">
            <div className="produto">
              <img src="./images/racaoumidagato2.jpg" alt="Produto 2" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Ração umida premium
                </p>
                <p className="produto-preco">$80,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarRacaoUmida2}>-</button>
                <span>{quantidadeRacaUmida2}</span>
                <button onClick={incrementarRacaoUmida2}>+</button>
              </div>
            </div>
          </div>
          <div className="produto">
            <div className="produto">
              <img src="./images/umida.jpg" alt="Produto 3" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Ração umida premium
                </p>
                <p className="produto-preco">$70,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarRacaoUmida3}>-</button>
                <span>{quantidadeRacaUmida3}</span>
                <button onClick={incrementarRacaoUmida3}>+</button>
              </div>
            </div>
          </div>
        </>
      );
    }
    else if(menuSelecionado === 'banhoTosa'){
      return (
        <>
          <h1>Banho & Tosa</h1>

          <div className="produto">
            <div className="produto">
              <img src="./images/tosa.jpg" alt="Produto 1" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Tosa simples 
                </p>
                <p className="produto-preco">$90,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarBanhoTosa}>-</button>
                <span>{quantidadeBanhoTosa}</span>
                <button onClick={incrementarBanhoTosa}>+</button>
              </div>
            </div>
          </div>
          <div className="produto">
            <div className="produto">
              <img src="./images/tosaeBanho.jpg" alt="Produto 2" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Banho simples
                </p>
                <p className="produto-preco">$80,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarBanhoTosa2}>-</button>
                <span>{quantidadeBanhoTosa2}</span>
                <button onClick={incrementarBanhoTosa2}>+</button>
              </div>
            </div>
          </div>
          <div className="produto">
            <div className="produto">
              <img src="./images/banhoTosa.jpg" alt="Produto 3" />
              <div className="produto-info">
                <p className="produto-nome">Nome do produto aqui</p>
                <p className="produto-descricao">
                  Descrição: Banho + tosa 
                </p>
                <p className="produto-preco">$150,00</p>
              </div>
              <div className="produto-acoes">
                <button onClick={decrementarBanhoTosa3}>-</button>
                <span>{quantidadeBanhoTosa3}</span>
                <button onClick={incrementarBanhoTosa3}>+</button>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="produto-selecionado-container">
      <aside className="menu-lateral">
        <h3>Menu</h3>
        <ul>
          <li onClick={() => setMenuSelecionado('racaoSeca')}>Ração seca</li>
          <li onClick={() => setMenuSelecionado('racaoUmida')}>Ração úmida</li>
          <li onClick={() => setMenuSelecionado('banhoTosa')}>Banho & tosa</li>
        </ul>
      </aside>
      <div className="tela-inicial">
        <header className="header">
          <div className="search-bar">
            <input type="search" placeholder="Digite o que você busca" />
            <button>🔍</button>
          </div>
          <div className="shopping-cart">
            <span></span>
            <ShoppingCart />
            <span className="cart-count">3</span>
          </div>
        </header>
        <main className="produtos">{getContent()}</main>
      </div>
    </div>
  );
}

export default ProdutoSelecionado;
