import React from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import KirjauduSivu from './components/KirjauduSivu.js';
import Etusivu from './components/Etusivu.js';
import PelaajatSivu from './components/PelaajatSivu.js';
import ToimihenkilotSivu from './components/ToimihenkilotSivu.js';
import Kalenteri from './components/Kalenteri.js';
import './App.css';
import PelaajakorttiSivu from "./components/PelaajakorttiSivu";
import Pelaajalista from "./components/Pelaajalista";


const App = appProps => (
    <Router>
        <div className="App">
            <Switch>
                <Route exact name="index" path="/" component={Etusivu}/>
                <Route path="/login" component={KirjauduSivu} />
                <Route path="/kalenteri" component={Kalenteri} />
                <Route path="/pelaajat" component={PelaajatSivu}/>
                <Route path="/toimihenkilot" component={ToimihenkilotSivu}/>
                <Route path="/pelaajakortti/:id" component={PelaajakorttiSivu}/>
            </Switch>
        </div>
    </Router>
)

export default App;
