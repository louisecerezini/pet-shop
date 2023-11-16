import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const testEmail = regex.test(email);
  const SIX = 6;
  const navigate = useNavigate();

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const saveUser = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/cadastro');
  };

  return (
    <div className="login-container">
      <h2> Login </h2>
      <form>
        <input
          type="email"
          className="input-field"
          placeholder="E-email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="password"
          name="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <div className="checkbox">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Eu concordo com os termos e condições</label>
        </div>
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
        <div className="cadastro-text">
          <a href="/cadastro">Cadastre-se aqui</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
