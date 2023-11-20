import '../css/ProdutoSelecionado.css';
import { ShoppingCart } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { produtosDisponiveis } from '../data/mocks';

function ProdutoSelecionado() {
  const [produtosCarrinho, setProdutosCarrinho] = React.useState(() => {
    const usuarioSalvo = localStorage.getItem('user');
    const carrinhoSalvo = usuarioSalvo ? JSON.parse(usuarioSalvo).produtosCarrinho: [];
    return carrinhoSalvo ? carrinhoSalvo : [];
  });

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('user');
    const usuarioSalvoParsed = usuarioSalvo ? JSON.parse(usuarioSalvo): {};

    if(usuarioSalvoParsed) {
      usuarioSalvoParsed.produtosCarrinho = produtosCarrinho;
      localStorage.setItem('user', JSON.stringify(usuarioSalvoParsed));
    }
  }, [produtosCarrinho]);

  const getQuantidadeProduto = (produto) => {
    const produtoDoCarrinho = produtosCarrinho.find(
      (pc) => pc.id === produto.id
    );
    return produtoDoCarrinho ? produtoDoCarrinho.quantidade : 0;
  };

  const adicionarProduto = (produto) => {
    const produtos = [...produtosCarrinho];
    const produtoIndex = produtos.findIndex((p) => p.id === produto.id);

    if (produtoIndex === -1) {
      produtos.push({
        id: produto.id,
        tipo: produto.tipo,
        imagemUrl: produto.imagemUrl,
        preco: produto.preco,
        quantidade: 1,
        descricao: produto.descricao
      });
    } else {
      produtos[produtoIndex].quantidade += 1;
    }

    setProdutosCarrinho(produtos);
  };

  const removerProduto = (produto) => {
    const produtos = [...produtosCarrinho];
    const produtoIndex = produtos.findIndex((p) => p.id === produto.id);

    if (produtoIndex !== -1) {
      if (produtos[produtoIndex].quantidade > 1) {
        produtos[produtoIndex].quantidade -= 1;
      } else {
        produtos.splice(produtoIndex, 1);
      }
    }

    setProdutosCarrinho(produtos);
  };

  const [menuSelecionado, setMenuSelecionado] = React.useState('racaoSeca'); //racaoSeca, racaoUmida,banhoTosa

  const getPageTitle = () => {
    if (menuSelecionado === 'racaoSeca') {
      return 'Racao Seca';
    } else if (menuSelecionado === 'racaoUmida') {
      return 'Racao Umida';
    } else {
      return 'Banho e Tosa';
    }
  };

  const getPageElements = () => {
    return produtosDisponiveis
      .filter((p) => p.tipo === menuSelecionado)
      .map((produto, index) => (
        <div className="produto" key={index}>
          <div className="produto">
            <img src={`./images/${produto.imagemUrl}`} alt="Produto 1" />
            <div className="produto-info">
              <p className="produto-descricao">{`Descrição: ${produto.descricao}`}</p>
              <p className="produto-preco">${produto.preco.toFixed(2)}</p>
            </div>
            <div className="produto-acoes">
              <button onClick={() => removerProduto(produto)}>-</button>
              <span>{getQuantidadeProduto(produto)}</span>
              <button onClick={() => adicionarProduto(produto)}>+</button>
            </div>
          </div>
        </div>
      ));
  };

  const getContent = () => {
    return (
      <>
        <h1>{getPageTitle()}</h1>
        {getPageElements()}
      </>
    );
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
