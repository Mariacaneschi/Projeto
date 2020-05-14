import React from 'react';
import './styles.css';

export default function Cadastro(){
    return(
        <div className="cadastro h-100">
            <form >
                <div className="bloco_cadastro d-flex justify-content-center flex-column">
                    <input
                        type = "email"
                        className = "emal"
                        id = "email"
                        placeholder = "Digite seu e-mail"
                    />
                </div>
            </form>
        </div>
    );
}

