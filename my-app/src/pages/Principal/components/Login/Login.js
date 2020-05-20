import React, {useState} from 'react';
import './style.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
import {Email, VpnKey } from '@material-ui/icons';
import {useHistory} from 'react-router-dom';


function Login() {
  const usuario = "equipe2@cpe.br";
  const senha = "traineecpe";

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

        <Button onClick = {() => handleChange()} className="mt-2 col-5 mx-auto" variant="dark" style={{fontSize:"25px", fontFamily:"Comic Sans MS"}}>Entrar</Button>
      </div>
  );
}

export default Login;