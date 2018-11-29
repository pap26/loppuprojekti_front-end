import React, { Component } from "react";
import { auth } from "../firebase/auth";

class Kirjaudu extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.state = {
      email: "",
      password: "",
      error: false,
      passwordReset: false,
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // käyttäjän autentikointi Firebasessa
  login(event) {
    event.preventDefault();
    console.log("login", auth);
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
        this.onLoginFailure.bind(this)("Tarkista sähköpostiosoitteesi ja salasanasi.");
        }
      );
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage });
  }

  onLoginSuccess() {
    this.setState({
      email: this.state.email,
      password: "",
      error: "",
      resetPassword: ""
    });
  }

  resetPassword(event) {
    event.preventDefault();
    console.log("resetPassword", auth);
    auth
      .sendPasswordResetEmail(this.state.email)
      .then(this.onResetSuccess.bind(this)("Linkki salasanan vaihtamiseen lähetetty sähköpostiisi."))      
      .catch(error => {
        this.onResetFailure.bind(this)("Sähköpostiosoitetta ei löydy. Koeta uudelleen.")
    });
  }

  onResetFailure(infoMessage) {
    this.setState({ resetPassword: infoMessage });
  }

  onResetSuccess(infoMessage) {
    this.setState({ resetPassword: infoMessage });
  }

  render() {
    return (
      <div>
        <div>
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
              className="flat_button kirjaudu_btn yellow-button"
            >
              Kirjaudu
            </button>

            <button 
              type="submit"
              onClick={this.resetPassword}
              className="flat_button kirjaudu_btn silver-button"
            >
              Vaihda salasana
            </button>
          </form>
        </div>
        <h2 style={styles.infoTextStyle}>{this.state.error}</h2>
        <h2 style={styles.infoTextStyle}>{this.state.resetPassword}</h2>
      </div>
    );
  }
}

const styles = {
  infoTextStyle: {
    fontSize: 16,
    alignSelf: "left",
    color: "red"
  }
};

export default Kirjaudu;