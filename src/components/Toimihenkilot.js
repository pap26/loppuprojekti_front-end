import React, { Component } from 'react';

const toimihenkilot = [
    {
        etunimi: 'Sam',
        sukunimi: 'Sam',
        rooli: 'joukkueenjohtaja',
        email: 'somewhere@gmail.com',
        puh: '040 4567890'

    },

    {
        etunimi: 'Piia',
        sukunimi: 'Piispa',
        rooli: 'valmentaja',
        email: 'somewhere@gmail.com',
        puh: '040 4567890'

    }];


class Toimihenkilot extends Component {

    render() {

        const toimihenkilolista = toimihenkilot.map(henkilo => {
    
            return (
                <div className="pelaaja_ruutu">
                <div className="pelaaja_img"></div>
                    <div className="pelaajannimi">
                    <span>{henkilo.etunimi}{henkilo.sukunimi}</span></div>
                    <div className="toimihenkilot">
                        <span className="nimi">{toimihenkilot.rooli} </span>
                        <span className="nimi">{toimihenkilot.email} </span>
                        <span className="nimi">{toimihenkilot.puh} </span>
                    </div>
                    </div>
                    )
    
        });

        return (
            <div>
            <h3>Toimihenkilöt</h3>
                <button href="">Lisää pelaaja</button>
                <div className="flexpalstat" >{toimihenkilolista}</div>
            </div>
            );
        }   
}
export default Toimihenkilot;