import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import KirjauduSivu from './components/KirjauduSivu.js';
import Etusivu from './components/Etusivu.js';
import Pelaajat from './components/Pelaajat.js';
import Toimihenkilot from './components/Toimihenkilot.js';
import Tapahtumat from './components/Tapahtumat.js';
import Info from './components/Info';
import './App.css';
import UusiPelaaja from "./components/UusiPelaaja";
import Pelaajalista from "./components/Pelaajalista";


const App = appProps => (
    <Router>
        <div className="App">
            <Switch>
                <Route exact name="index" path="/" component={Etusivu}/>
                <Route path="/kirjaudu" component={KirjauduSivu}/>
                <Route path="/tapahtumat" component={Tapahtumat}/>
                <Route path="/info" component={Info}/>
                <Route path="/pelaajat" component={Pelaajat}/>
                <Route path="/toimihenkilot" component={Toimihenkilot}/>
                <Route path="/pelaajat/:id" component={UusiPelaaja}/>
                <Route path="/pelaajalista" component={Pelaajalista}/>

            </Switch>
        </div>
    </Router>
)

export default App;
