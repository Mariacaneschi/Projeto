//gerenciamento de rotas

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Case from './pages/Case/Case';
import Principal from './pages/Principal/Principal';
import Pokedex from './pages/Pokedex/Pokedex';
import Cadastro from './pages/Cadastro/Cadastro';



//path: em qual endereço a página vai retornar
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal}>
                </Route>
                <Route path="/case" exact component={Case}>
                </Route>
                <Route path="/pokedex" component={Pokedex}>
                </Route>
                <Route path="/cadastro" exact component={Cadastro}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}