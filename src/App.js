import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import Impressum from "./pages/Impressum";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/impressum">
                    <Impressum/>
                </Route>
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
