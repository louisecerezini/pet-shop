import '../css/ProdutoSelecionado.css'; //Importa o arquivo CSS para estilização do componente.
import { ShoppingCart } from '@mui/icons-material'; //// Importa o ícone de carrinho de compras do Material UI.
import React, { useEffect } from 'react'; //Importa React e o hook useEffect.
import { produtosDisponiveis } from '../data/mocks'; // Importa dados de produtos disponíveis.
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação.

function ProdutoSelecionado() {
  const navigate = useNavigate(); // Inicializa o hook useNavigate.
  // Estado para gerenciar os produtos no carrinho, carregados inicialmente do localStorage.
  const [produtosCarrinho, setProdutosCarrinho] = React.useState(() => {
    const usuarioSalvo = localStorage.getItem('user');
    const carrinhoSalvo = usuarioSalvo
      ? JSON.parse(usuarioSalvo).produtosCarrinho
      : [];
    return carrinhoSalvo ? carrinhoSalvo : [];
  });
  // useEffect para atualizar o localStorage sempre que produtosCarrinho mudar.
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('user');
    const usuarioSalvoParsed = usuarioSalvo ? JSON.parse(usuarioSalvo) : {};

    if (usuarioSalvoParsed) {
      usuarioSalvoParsed.produtosCarrinho = produtosCarrinho;
      localStorage.setItem('user', JSON.stringify(usuarioSalvoParsed));
    }
  }, [produtosCarrinho]);
  // Função para obter a quantidade de um produto no carrinho.
  const getQuantidadeProduto = (produto) => {
    const produtoDoCarrinho = produtosCarrinho.find(
      (pc) => pc.id === produto.id
    );
    return produtoDoCarrinho ? produtoDoCarrinho.quantidade : 0;
  };
  // Função para adicionar um produto ao carrinho.
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
        descricao: produto.descricao,
      });
    } else {
      produtos[produtoIndex].quantidade += 1;
    }

    setProdutosCarrinho(produtos);
  };
  // Função para remover um produto ou diminuir sua quantidade no carrinho.
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

  // Estado para controlar o menu selecionado
  const [menuSelecionado, setMenuSelecionado] = React.useState('racaoSeca'); //racaoSeca, racaoUmida,banhoTosa

  //Função para obter o título da página com base no menu selecionado.
  const getPageTitle = () => {
    if (menuSelecionado === 'racaoSeca') {
      return 'Racao Seca';
    } else if (menuSelecionado === 'racaoUmida') {
      return 'Racao Umida';
    } else {
      return 'Banho e Tosa';
    }
  };
  //Função para navegar para o carrinho de compras.
  const goToCart = () => {
    navigate('/carrinho');
  };

  // Função para obter os elementos da página com base nos produtos disponíveis.
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

  // Função para renderizar o conteúdo principal da página.
  const getContent = () => {
    return (
      <>
        <h1>{getPageTitle()}</h1>
        {getPageElements()}
      </>
    );
  };
  // Calcula a soma total dos itens no carrinho.
  const somaTotal = produtosCarrinho.reduce((acumulador, produtoAtual) => {
    return acumulador + produtoAtual.quantidade;
  }, 0);

  // Renderização do componente.
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
          <div className="shopping-cart" onClick={goToCart}>
            <span></span>
            <ShoppingCart />
            <span className="cart-count">{somaTotal}</span>
          </div>
        </header>
        <main className="produtos">{getContent()}</main>
      </div>
      <div className="produto-selecionado-container"></div>
    </div>
  );
}

export default ProdutoSelecionado; // Exporta o componente
