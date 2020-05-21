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
            <div className="tamanho d-flex justify-content-center flex-column">
                <div className="mensagem d-flex justify-content-center flex-column align-items-center">
                    Bem vindo à sua nova Pokedex!
                <br />
                    <p>Aqui você poderá realizar o cadastro para descobrir um novo mundo com seus Pokemóns preferidos!</p>
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
                    <select className="selecao">
                    <option value="1">Treinador</option>
                    <option value="2">Professor</option>
                        
                    </select>

                    <div className="inputs">
                        <input type="submit" className="button"/>
                    </div>
                </form>
            </div>
        </div>
    );
}




