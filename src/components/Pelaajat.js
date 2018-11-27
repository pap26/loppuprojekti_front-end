import React, {Component} from 'react';
import UusiPelaaja from "./UusiPelaaja";

class Pelaajat extends Component {
    state = {
        ladataan: true,
        pelaajajoukko: []
    };

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

                <div className={"Pelaajat1"}>
                <h1>Pelaajat</h1>
                    {pelaajajoukko.map(pelaaja =>
                    <div key={pelaaja.id}>
                        {pelaaja.etunimi} {pelaaja.sukunimi}
                    </div>
                        )}
                </div>
                <hr/>
                <p>Tähän tulee button link pelaajalistaan?</p>
                <UusiPelaaja/>

            </div>
        );
    }
}


export default Pelaajat;