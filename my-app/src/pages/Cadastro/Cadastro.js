import React, { useState, useEffect } from 'react';
import './styles.css';



export default function Cadastro() {

    return (
        <div className="cadastro h-100">
            <form >
                <div className="bloco_cadastro d-flex justify-content-center flex-column">
                    <div className="m-3">
                        <label>Crie seu Usuário</label>
                        <input
                            type="text"
                            className="username"
                            id="email"
                            placeholder="Usuário"
                        />
                    </div>
                    <label>Digite seu e-mail</label>
                    <input
                        type="email"
                        className="emal"
                        id="email"
                        placeholder="E-mail"
                    />
                    <label>Crie uma senha</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        placeholder="Senha"
                    />
                </div>
            </form>
        </div>
    );
}

