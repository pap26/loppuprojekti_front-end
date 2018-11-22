import React, { Component } from 'react';
import { auth } from '../firebase/auth';
import Etusivu from './Etusivu';
import Kirjaudu from './Kirjaudu';

class Kirjautumistarkistus extends Component {
    constructor() {
      super();
      this.state = ({
        user: null,
      });
      this.authListener = this.authListener.bind(this);
    }
  
    componentDidMount() {
      this.authListener();
    }
  
    authListener() {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          this.setState({ user });
        } else {
          this.setState({ user: null });
        }
      });
    }
    render() {
      return (
        <div>
            {this.state.user ? ( <Etusivu/>) : (<Kirjaudu />)}
        </div>
      );
    }
}
  
   export default Kirjautumistarkistus;