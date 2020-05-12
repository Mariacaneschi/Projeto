//gerenciamento de rotas

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Case from './pages/Case/Case';
import Principal from './pages/Principal/Principal';

//path: em qual endereço a página vai retornar
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal}>
                </Route>
                <Route path="/login" exact component={Login}>
                </Route>
                <Route path="/case" exact component={Case}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}