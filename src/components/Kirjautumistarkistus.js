import React, { Component } from 'react';
import KirjauduSivu from './KirjauduSivu';
import { auth } from '../firebase/auth';
import App from '../App';

class Kirjautumistarkistus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener() {
        console.log("authListener", auth);
        auth.onAuthStateChanged((user) => { // käynnistyy kun auth-tilaa muutetaan
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }    

    render() { //jos tyyppi kirjautuneena, pääsee Alku-sivulle, jos ei, menee Kirjautumiseen
        return (
            <div> 
                {this.state.user ? (<App/>) : (<KirjauduSivu/>)}
            </div>
        );
    }
}

export default Kirjautumistarkistus;