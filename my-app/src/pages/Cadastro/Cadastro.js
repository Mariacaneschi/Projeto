import React from 'react';
import './styles.css';
import {useHistory} from 'react-router-dom';

export default function Cadastro() {
    const history = useHistory();
    function redireciona(){
        history.push('/');
    }

    return (
        <div className="cadastro h-100">
            <div className="mensagem">
                <h1>Bem vindo à Pokedex</h1>
            </div>
            <form onSubmit={() => redireciona()}  className="form d-flex justify-content-center flex-column">

                <label>Digite seu nome completo</label>
                <div className="inputs">
                    <input
                        className="form-field"
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        pattern="[A-Za-zÀ-ú ']{5,}"
                        required="required"
                    />
                </div>

                <label>E-mail</label>
                <div className="inputs">
                    <input
                        className="form-field"
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required="required"
                    />
                </div>

                <label>Crie uma senha (mínimo 6 caracteres)</label>
                <div className="inputs">
                    <input
                        className="form-field"
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        pattern=".{6,}"
                        required="required"
                    />
                </div>

                <label>Escolha sua função</label>
                <div className="radio">
                    <div className="form-field">
                        <input
                            type="radio"
                            name="funcao"
                            value="treinador"
                            required="required"
                        />  Treinador
                        <br></br>
                        <input
                            type="radio"
                            name="funcao"
                            value="professor"
                            required="required"
                        />  Professor
                    </div>
                </div>
                <div className="inputs">
                    <input type="submit" className="button"/>
                </div>
            </form>
        </div>
    );
}

