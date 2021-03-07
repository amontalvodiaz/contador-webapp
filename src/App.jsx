import React from "react";
import {Router} from "@reach/router";
import './styles/main.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";

const App = () => {
    return (<main>
            <Header/>
            <Router>
                <Login path='/'/>
                <Home path='home'/>
            </Router>

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
        </main>
    )
}

export default App