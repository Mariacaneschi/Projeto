import React from 'react';
import './styles.css';


export default function Cadastro() {
    return (
        <div className="cadastro h-100">
            <form className="form d-flex justify-content-center flex-column align-items-center">
                <p>Para criar sua conta preencha o formulário abaixo e clique em enviar!</p>
                <input
                    className="form-field" 
                    type="text" 
                    name="nome"
                    placeholder="Digite seu nome"
                    pattern="[A-Za-zÀ-ú ']{5,}"
                    required="required"
                    />
                <input
                    className="form-field" 
                    type="email" 
                    name="email"
                    placeholder="Digite seu e-mail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required="required"
                />
                <input
                    className="form-field" 
                    type="password" 
                    name="senha"
                    placeholder="Crie uma senha"
                    pattern=".{6,}"
                    required="required"
                />
                <input type="submit" className="button"/>
            </form>
        </div>
    );
}

