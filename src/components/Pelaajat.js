import React, {Component} from 'react';
import Navigation from './Navigation.js';

class Pelaajat extends Component {

    state = {
        ladataan: true,
        pelaajajoukko: []
    };

/*    async ComponentDidMount() {
        const response = await fetch('/api/pelaajat');
        const body = await response.json();
        this.setState({ pelaajajoukko: body, ladataan: false });
EI MUUTEN TOIMI
    }*/

    componentDidMount() {
        this.setState({ladataan: true});

        fetch('api/pelaajat')
            .then(response => response.json())
            .then(data => this.setState({pelaajajoukko: data, ladataan: false}));
    }

    render() {
        const {pelaajajoukko, ladataan} = this.state;


      if (ladataan) {
          return <p>Ladataan...</p>;
      }


        return (
            <div>
                <Navigation/>
                <div className={"Pelaajat1"}>
                <h1>Pelaajat</h1>
                    {pelaajajoukko.map(pelaaja =>
                    <div key={pelaaja.id}>
                        {pelaaja.etunimi} {pelaaja.sukunimi}
                    </div>
                        )}
                </div>
                <hr/>
                <p>Tähän tulee button link pelaajalistaan kun saadaan joskus toimivia linkkibuttoneita!!!!! Bootstrapin tyylit ei toimi wtf</p>

            </div>
        );
    }
}

export default Pelaajat;