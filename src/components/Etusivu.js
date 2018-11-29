import React, { Component } from "react";
import TapahtumaSivu from "./TapahtumaSivu.js";
import KirjauduSivu from "./KirjauduSivu.js";
import { auth } from "../firebase/auth";


class Etusivu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null, 
      tarkistettu: false, 
      admin: false
    };
    this.authListener = this.authListener.bind(this);
  }


  componentDidMount() {
    this.authListener();
  }

  authListener() { // pitää silmällä sitä, onko käyttäjä kirjautunut
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user: user, tarkistettu: true });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    console.log("cu", auth.currentUser);
    return (
        <div>{auth.currentUser ? <TapahtumaSivu /> : <KirjauduSivu />}</div>        
    );
  }
}  

export default Etusivu;