import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Cadastro from '../components/Cadastro';
import CadastroDoPet from '../components/CadastroDoPet';
import TelaInicial from '../components/TelaInicial';
import TelaRacaoSeca from '../components/TelaRacaoSeca';
import TelaRacaoUmida from '../components/TelaRacaoUmida';
import BanhoTosa from '../components/BanhoTosa';
import ProdutoSelecionado from '../components/ProdutoSelecionado';
import Carrinho from '../components/Carrinho';
import Agendamentos from '../components/Agendamentos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroDoPet" element={<CadastroDoPet />} />
        <Route path="/telainicial" element={<TelaInicial />} />
        <Route path="/telaracaoseca" element={<TelaRacaoSeca />} />
        <Route path="/telaracaoumida" element={<TelaRacaoUmida />} />
        <Route path="/banhotosa" element={<BanhoTosa />} />
        <Route path="/produtoselecionado" element={<ProdutoSelecionado />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
      </Routes>
    </Router>
  );
}

export default App;
