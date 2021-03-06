import React from "react";
import {Router} from "@reach/router";
import './styles/main.css';
import Home from "./components/Home";

const App = () => {
    return (<main>

        <Router>
            <Home path='/'/>
        </Router>
    </main>)
}

export default App