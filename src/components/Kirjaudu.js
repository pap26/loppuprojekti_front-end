import React, { Component } from 'react';
import logo from '../img/kopse_logo.png'; 

class Kirjaudu extends Component {
    //     constructor(props) {
    //     super(props);
    //   }

      handleClick=()=> {
        console.log('Click happened', this.props);
        this.props.history.push('/')}

    render() {
        return (
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p><button onClick={this.handleClick} type="button"> Kirjaudu</button></p>
          </div>
        );
    }
}

export default Kirjaudu;