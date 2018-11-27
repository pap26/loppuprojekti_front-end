import React, { Component } from 'react';
import {Link} from "react-router-dom";
import UusiPelaaja from "./UusiPelaaja";

class Toimihenkilot extends Component {

    constructor(props) {
        super(props);
        this.state = {toimihenkilot: [], ladataan: true};
    }

    componentDidMount() {
        this.setState({ladataan: true});

        fetch('api/toimihlot')
            .then(response => response.json())
            .then(data => this.setState({toimihenkilot: data, ladataan: false}));
    }

    render() {
        const {toimihenkilot, ladataan} = this.state;

        if (ladataan) {
            return <p>Ladataan...</p>;
        }

        const toimihenkilolista = toimihenkilot.map(toimihlo => {

        return (
                <div>
                    <div className="pelaaja_ruutu">
                        <div className="pelaaja_img"><img src={toimihlo.kuva} alt="toimihenkilon kuva"  />
                        </div>
                        <div className="pelaajannimi">
                            <span>{toimihlo.nimi}</span>
                        </div>
                        <div className="toimihenkilot">
                            <span className="nimi">{toimihlo.rooli} </span>
                            <span className="nimi">{toimihlo.email} </span>
                        </div>


                        </div>
                </div>
        )});

        return (
            <div>
            <h3>Toimihenkilöt</h3>
                <div className="flexpalstat" >{toimihenkilolista}</div>
            </div>
            );
        }
                    }
export default Toimihenkilot;