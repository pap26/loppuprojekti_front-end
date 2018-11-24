import React, { Component } from 'react';

class Pelaajalista extends Component {
    constructor(props) {
        super(props);
        this.state = {pelaajat: [], ladataan: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ladataan: true});

        fetch('api/pelaajat')
            .then(response => response.json())
            .then(data => this.setState({pelaajat: data, ladataan: false}));
    }

    async remove(id) {
        await fetch(`/api/pelaaja/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let paivitettyJoukko = [...this.state.pelaajat].filter(i => i.id !== id);
            this.setState({pelaajat: paivitettyJoukko});
        });
    }

    render() {
        const {pelaajat, ladataan} = this.state;

        if (ladataan) {
            return <p>Ladataan...</p>;
        }

        const pelaajalista = pelaajat.map(pelaaja => {
            const pelaajanimi = `${pelaaja.etunimi || ''} ${pelaaja.sukunimi || ''}`;
            return (
                <div>
                    <div className="pelaaja_ruutu">
                    {/* <div>key={pelaaja.id}</div> */}
                    <div className="pelaaja_img"></div>
                    <div className="pelaajannimi">
                        <span className="pelinumero">{pelaaja.numero}</span>
                        <span>{pelaajanimi}</span>
                        
                    </div>
                
                     <div className="pelaaja_napit">
                        <button href="/pelaajat/:id">Muokkaa</button>
                        <button onClick={() => this.remove(pelaaja.id)}>Poista</button> 
                    </div>
                    </div>
                </div>)
    
        });

        return (
            <div>
                <h3>Pelaajat</h3>
                <button href="">Lisää pelaaja</button>
                <div className="flexpalstat" >{pelaajalista}</div>
            </div>
        );
    }
}
export default Pelaajalista;