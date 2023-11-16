import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import CadastroDoPet from './components/CadastroDoPet';
import TelaInicial from './components/TelaInicial';
import TelaRacaoSeca from './components/TelaRacaoSeca';
import TelaRacaoUmida from './components/TelaRacaoUmida';
import BanhoTosa from './components/BanhoTosa';
import ProdutoSelecionado from './components/ProdutoSelecionado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroDoPet" element={<CadastroDoPet />} />
        <Route path="/telainicial" element={<TelaInicial />} />
        <Route path="/telaracaoseca" element={<TelaRacaoSeca/>} />
        <Route path="/telaracaoumida" element={<TelaRacaoUmida/>} />
        <Route path="/banhotosa" element={<BanhoTosa/>} />
        <Route path="/produtoselecionado" element={<ProdutoSelecionado/>} />
      </Routes>
    </Router>
  );
}

export default App;
