import React, { Component } from "react";
import logo from "../img/kopse_logo.png";
import { auth } from "../firebase/auth";

class Kirjaudu extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    // this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.state = {
      email: "",
      password: "",
      error: false
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // vanha käyttäjä kirjautuu
  login(event) {
    event.preventDefault();
    console.log("login", auth);
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
        // this.setState({ error: true });
        let errorCode = error.code;
        this.onLoginFailure.bind(this)("Jaa nyt ei männynnä ihan niinku Strömssöössä. Koetappa uuvelleen.");
        }
      );
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage });
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      error: "",
    });
  }

  resetPassword(event) {
    event.preventDefault();
    console.log("resetPassword", auth);
    auth.sendPasswordResetEmail(this.state.email).then(function() {
      console.log('Sähköposti lähetetty')
    }).catch(function(error) {
      let errorCode = error.code;
      console.log('Ei onnistu')
    });
  }

  // // uusi käyttäjä kirjautuu, tämän voisi ottaa käyttöön mahdollisessa Admin-näkymässä. Alempana tämän käyttämä nappula.
  // signup(event) {
  //     event.preventDefault();
  //     console.log("signup", auth);
  //     auth
  //       // .auth()
  //       .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //       .then((u) => {})
  //       .catch(error => {
  //           console.log(error);
  //       });
  //       console.log('Onnistui')
  // }

  render() {
    const { email, password, error } = this.state;
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
            <button
              type="submit"
              onClick={this.login}
              className="btn btn-primary"
            >
              Kirjaudu
            </button>

            {/* <button
              onClick={this.signup}
              style={{ marginLeft: "25px" }}
              className="btn btn-success"
            >
              Uusi käyttäjä
            </button> */}

            <button
              type="submit"
              onClick={this.resetPassword}
              className="btn btn-primary"
            >
              Vaihda salasana
            </button>
          </form>
        </div>
        <h2 style={styles.errorTextStyle}>{this.state.error}</h2>
      </div>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: "left",
    color: "red"
  },
  messageTextStyle: {
    fontSize: 16,
    alignSelf: "left",
    color: "red"
  }
};

export default Kirjaudu;
