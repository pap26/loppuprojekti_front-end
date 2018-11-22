import React, { Component } from "react";
import Tapahtumat from "./Tapahtumat.js";
import Kirjaudu from "./Kirjaudu.js";
import { auth } from "../firebase/auth";


class Etusivu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null, tarkistettu: false
    };
    this.authListener = this.authListener.bind(this);   
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
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
        <div>{auth.currentUser ? <Tapahtumat /> : <Kirjaudu />}</div>        
    );
  }
}

export default Etusivu;
