//gerenciamento de rotas

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login/Login';
import Case from './pages/Case/Case';

//path: em qual endereço a página vai retornar
export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login}>
                </Route>
                <Route path="/case" exact component={Case}>
                </Route>
            </Switch> 
        </BrowserRouter>
    );
}