import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

export default function Cadastro() {
    const history = useHistory();
    function redireciona() {
        history.push('/');
    }

    return (
        <div className="cadastro h-100">
            <div className="teste d-flex justify-content-center flex-column">
                <div className="mensagem d-flex justify-content-center flex-column align-items-center">
                    Bem vindo à sua nova Pokedex!
                <br />
                    <p>Aqui você poderá realizar o cadastro para descobrir um novo mundo com seus Pokemóns preferidos!</p>
                    <h6>Por favor, preencha os campos abaixo com seus dados corretamente e depois de enviar poderá fazer o login na página principal e poderá conhecer as experiências maravilhosas que o aguardam.</h6>
                </div>

                <form onSubmit={() => redireciona()} className="form d-flex justify-content-center flex-column">

                    <label>Digite seu nome:</label>
                    <div className="inputs">
                        <input
                            className="form-field"
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            pattern="[A-Za-zÀ-ú ']{5,}"
                            required="required"
                        />
                    </div>

                    <label>Digite seu e-mail:</label>
                    <div className="inputs">
                        <input
                            className="form-field"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required="required"
                        />
                    </div>

                    <label>Crie uma senha (de 6 a 10 caracteres):</label>
                    <div className="inputs">
                        <input
                            className="form-field"
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            pattern=".{6,10}"
                            required="required"
                        />
                    </div>

                    <label>Escolha sua função:</label>
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
                        <input type="submit" className="button" />
                    </div>
                </form>
            </div>
        </div>
    );
}

