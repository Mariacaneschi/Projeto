import React, {useState} from 'react';
import './style.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
import {Email, VpnKey } from '@material-ui/icons';
import {useHistory} from 'react-router-dom';


function Login() {
  const usuario = "equipe2@cpe.br";
  const senha = "cpe";

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleChange(){

    if (username === usuario && senha === password){
      history.push('/pokedex');
    }
    else{
      alert("E-mail ou senha incorretos.");
    }
  }


  return (
    <div className="back h-100">
      <div className="login d-flex justify-content-center flex-column p-3">
        <h3>Login</h3>
        <div className="d-flex justify-content-center flex-column">
          
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><Email></Email></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Digite seu e-mail"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
              type="email"
              onChange = {(e) => setUsername(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><VpnKey></VpnKey></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="basic-addon1"
              type="password"
              onChange = {(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </div>
        <p style={{color: 'royalblue', fontSize: '15px', textAlign: 'center'}}>
          Não tem uma conta? <a href="http://google.com" className="text-decoration-none">Cadastre-se</a>
          </p>
        <Button onClick = {() => handleChange()} className="mt-2 col-3.5 mx-auto">Entrar</Button>
      </div>
    </div>
  );
}

export default Login;