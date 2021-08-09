import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import React from 'react'
import {Navigation} from "./Navigation";
import {Home} from "./Home";

document.body.style = 'background: black;';

export const App = () => (
    <>
        <Navigation/>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>

    </>
)