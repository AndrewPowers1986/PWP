import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import React from 'react'
import {Navigation} from "./Navigation";
import {Home} from "./Home";

//import "../assets/images/stars_386913main_Swift_M31_large_UV_Cropped_Rot90.jpg";
import bgImage from "../../../public_html/assets/images/stars_386913main_Swift_M31_large_UV.jpg";

document.body.style.backgroundColor = 'black';
//document.body.style = 'backgroundImage: {bgImage}';
//document.body.style.backgroundRepeat = 'no-repeat';
//document.body.style.backgroundPosition = 'center';
document.body.style.backgroundSize = '100%';

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