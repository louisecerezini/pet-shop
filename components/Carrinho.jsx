import React, { useState } from 'react';
import '../css/Carrinho.css'; // Importa o arquivo de estilo CSS para o componente Carrinho.
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate do react-router-dom para navegação.

function Carrinho() {
  const navigate = useNavigate(); // Inicializa o hook useNavigate para redirecionar o usuário para outras páginas.

  // Inicializa o estado 'produtos' com itens salvos no localStorage.
  const [produtos, setProdutos] = useState(() => {
    const usuarioSalvo = localStorage.getItem('user');
    const carrinhoSalvo = usuarioSalvo
      ? JSON.parse(usuarioSalvo).produtosCarrinho
      : [];
    return carrinhoSalvo ? carrinhoSalvo : [];
  });

  // Função para incrementar a quantidade de um produto no carrinho.
  const incrementar = (id) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: produto.quantidade + 1 }
          : produto
      )
    );
  };

  // Função para decrementar a quantidade de um produto no carrinho.
  const decrementar = (id) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: Math.max(produto.quantidade - 1, 1) }
          : produto
      )
    );
  };

  // Função para remover um produto do carrinho.
  const removerProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  // Calcula o valor total dos produtos no carrinho.
  const valorTotal = produtos.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );

  // Função para navegar para a página de agendamentos.
  const goToSchedule = () => {
    navigate('/agendamentos');
  };

  return (
    <div className="carrinho-container">
      <header className="carrinho-header">
        <h2>Carrinho</h2>
        {/* Restante do cabeçalho do carrinho */}
      </header>
      <main className="carrinho-main">
        {produtos.map((produto) => (
          <div className="carrinho-produto" key={produto.id}>
            {/* Botão para remover produto, imagem e descrição do produto */}
            <button onClick={() => removerProduto(produto.id)}>X</button>
            <img
              src={`./images/${produto.imagemUrl}`}
              alt={produto.descricao}
            />
            <div>
              <p>{produto.descricao}</p>
              <div className="carrinho-quantidade">
                {/* Botões para ajustar a quantidade do produto */}
                <button onClick={() => decrementar(produto.id)}>-</button>
                <span>{produto.quantidade}</span>
                <button onClick={() => incrementar(produto.id)}>+</button>
              </div>
            </div>
            <p>R$ {produto.preco.toFixed(2)}</p> {/* Preço do produto */}
          </div>
        ))}
        {/* Exibição do valor total do carrinho */}
        <div className="carrinho-total">
          <span>Valor total da compra:</span>
          <span>R$ {valorTotal.toFixed(2)}</span>
        </div>
        {/* Botão para finalizar a compra e navegar para a página de agendamentos */}
        <button onClick={goToSchedule} className="carrinho-finalizar">
          Finalizar compra
        </button>
      </main>
    </div>
  );
}

export default Carrinho; // Exporta o componente para ser usado em outras partes do aplicativo.
