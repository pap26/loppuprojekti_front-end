import React, { Component } from "react";
import logo from "../img/kopse_logo.png";
import { auth } from '../firebase/auth';

class Kirjaudu extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  //   handleClick = () => {
  //     console.log("Click happened", this.props);
  //     this.props.history.push("/");
  //   };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // olemassa oleva käyttäjä kirjautuu
  login(event) {
    event.preventDefault();
    console.log("login", auth);
    auth
      //.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
      console.log('Onnistui')
  }

  // uusi käyttäjä kirjautuu
  signup(event) {
      event.preventDefault();
      console.log("signup", auth);
      auth
        // .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {})
        .catch(error => {
            console.log(error);
        });
        console.log('Onnistui')
  }
          
  // uloskirjautuminen
// export const doSignOut = () =>
// auth.signOut();

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="col-md-3">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Sähköposti</label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Kirjoita sähköpostiosoitteesi"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Salasana</label>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Kirjoita salasanasi"
              />
            </div>
            <button type="submit" onClick={this.login} className="btn btn-primary">
              Kirjaudu
            </button>
            <button
              onClick={this.signup}
              style={{ marginLeft: "25px" }}
              className="btn btn-success"
            >
              Uusi käyttäjä
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Kirjaudu;

// import React, { Component } from 'react';
// import logo from '../img/kopse_logo.png';

// class Kirjaudu extends Component {
//         constructor(props) {
//         super(props);
//       }

//       handleClick=()=> {
//         console.log('Click happened', this.props);
//         this.props.history.push('/')}

//     render() {
//         return (
//             <div>
//               <img src={logo} className="App-logo" alt="logo" />
//               <p><button onClick={this.handleClick} type="button"> Kirjaudu</button></p>
//           </div>
//         );
//     }
// }

// export default Kirjaudu;
