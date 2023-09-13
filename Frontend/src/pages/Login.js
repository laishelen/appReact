import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from 'react-bootstrap/Button';
import LoginIcon from '@mui/icons-material/Login';

import styles from "./Login.module.css";
import Logo from "../assets/images/logo.png"

import { useNavigate } from 'react-router-dom'; // Importar o useNavigate

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Instanciar o useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });

      if (response.status === 200) {
        alert('Login bem-sucedido!');
        // Redirecionar para a página /gestao após o login bem-sucedido.
        navigate('/gestao');
      }
    } catch (error) {
      alert('Credenciais inválidas.');
    }
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (    
    <Container className={styles.container} maxwidth="sm">  
        <Card className={styles.Card} sx={{ maxwidth: 488 }}>
          <img className={styles.Logo} src={Logo} alt="Logo" />    
          <form onSubmit={handleLogin}>
              <h4 class="display-5" className={styles.h4}>Login</h4>
              <label>E-mail</label>
              <input
              type="email"
              name="email"
              placeholder="Nome de usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <label>Senha:</label>
              <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="mt-3" variant="secondary" type="submit"><LoginIcon />&nbsp;Entrar</Button>
          </form>  
        </Card>   
    </Container> 
  );
};

export default Login;
