import React, { useState } from 'react';
import '../css/Carrinho.css';

function Carrinho() {
  const [produtos, setProdutos] = useState(() => {
    const usuarioSalvo = localStorage.getItem('user');
    const carrinhoSalvo = usuarioSalvo ? JSON.parse(usuarioSalvo).produtosCarrinho: [];
    return carrinhoSalvo ? carrinhoSalvo : [];
  });

  const incrementar = (id) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: produto.quantidade + 1 }
          : produto
      )
    );
  };

  const decrementar = (id) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: Math.max(produto.quantidade - 1, 1) }
          : produto
      )
    );
  };

  const removerProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  const valorTotal = produtos.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );

  return (
    <div className="carrinho-container">
      <header className="carrinho-header">
        <h2>Carrinho</h2>
        {/* Restante do seu cabeçalho do carrinho */}
      </header>
      <main className="carrinho-main">
        {produtos.map((produto) => (
          <div className="carrinho-produto" key={produto.id}>
            <button onClick={() => removerProduto(produto.id)}>X</button>
            <img
              src={`./images/${produto.imagemUrl}`}
              alt={produto.descricao}
            />
            <div>
              <p>{produto.descricao}</p>
              <div className="carrinho-quantidade">
                <button onClick={() => decrementar(produto.id)}>-</button>
                <span>{produto.quantidade}</span>
                <button onClick={() => incrementar(produto.id)}>+</button>
              </div>
            </div>
            <p>R$ {produto.preco.toFixed(2)}</p>
          </div>
        ))}
        <div className="carrinho-total">
          <span>Valor total da compra:</span>
          <span>R$ {valorTotal.toFixed(2)}</span>
        </div>
        <button className="carrinho-finalizar">Finalizar compra</button>
      </main>
    </div>
  );
}

export default Carrinho;
