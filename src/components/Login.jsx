// Importando o React e o hook useState.
import React, { useState } from 'react';
// Importando o arquivo CSS para estilização.
import '../css/Login.css';
// Importando o hook useNavigate do react-router-dom para navegação de rotas.
import { useNavigate } from 'react-router-dom';

// Definição do componente funcional Login.
function Login() {
  // Inicializando o estado para email e senha com valores vazios.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Regex para validar o formato do e-mail.
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Testando se o e-mail atual é válido.
  const testEmail = regex.test(email);
  // Constante para definir o tamanho mínimo da senha.
  const SIX = 6;
  // Hook para navegação.
  const navigate = useNavigate();

  // Função para lidar com mudanças no campo de e-mail.
  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  // Função para lidar com mudanças no campo de senha.
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  // Função para salvar o usuário e navegar para outra rota.
  const saveUser = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/cadastro');
  };

  // Renderização do componente.
  return (
    <div className="login-container">
      <h2> Login </h2>
      <form>
        {/* Campo de entrada para e-mail */}
        <input
          type="email"
          className="input-field"
          placeholder="E-email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        />
        {/* Campo de entrada para senha */}
        <input
          type="password"
          className="input-field"
          placeholder="password"
          name="password"
          value={password}
          onChange={handlePassword}
          required
        />
        {/* Checkbox para termos e condições */}
        <div className="checkbox">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Eu concordo com os termos e condições</label>
        </div>
        {/* Botão para submeter o formulário */}
        <div>
          <button
            className="button button-entrar"
            type="submit"
            disabled={!(password.length > SIX && testEmail)}
            onClick={saveUser}
          >
            Entrar
          </button>
        </div>
        {/* Link para cadastro */}
        <div className="cadastro-text">
          <a href="/cadastro">Cadastre-se aqui</a>
        </div>
      </form>
    </div>
  );
}

// Exportando o componente Login.
export default Login;
