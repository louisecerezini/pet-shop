import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import CadastroDoPet from './components/CadastroDoPet';
import TelaInicial from './components/TelaInicial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadrastro" element={<Cadastro />} />
        <Route path="/cadrastroDoPet" element={<CadastroDoPet />} />
        <Route path="/telaInicial" element={<TelaInicial />} />
      </Routes>
    </Router>
  );
}

export default App;
