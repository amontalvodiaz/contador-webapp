import React, {
    useState,
    lazy,
    Suspense
} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import './styles/main.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
import Profile from "./components/Profile";
import User from "./components/models/User";


const Home = lazy(() => import( "./components/Home"))
const App = () => {
    const [user, setUser] = useState(new User())
    const logMeIn = (userSession) =>{
        setUser(userSession)
    }
    const logMeOut = () =>{

        setUser({})
    }
    return (<main>
            <Router>
                <Header user={user} logout={logMeOut}/>
                <Suspense
                    fallback={<div>Loading ..</div>}>
                    <Switch>
                        <Route path="/" exact>
                            {user.isActive ? (<Redirect to="/home"/>) :
                                (<Login logMeIn={logMeIn} state={useState}/>)
                            }
                        </Route>

                        <Route path="/home">
                            {user.isActive ?
                                (<Home user={user}/>) :
                                (<Redirect to="/"/>)
                            }
                        </Route>

                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                    </Switch>
                </Suspense>
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