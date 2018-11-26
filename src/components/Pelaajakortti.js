import React, { Component } from 'react';

class Pelaajakortti extends Component {


    render() {
        return ( 
        <div>
                <h3>Pelaajan nimi </h3>
                <h3>10 </h3>
                <div className="pelaaja_ruutu">
                <div className="pelaaja_img"></div>
                
                <div className="syntymaaika">
                <p><strong>Syntymäpäivä:</strong> 13.6.1980</p>
                <p><strong>Lempiruoka: </strong> makaronilaatikko</p>
                <p><strong>Pelipaikka:</strong> Hyökkääjä</p>
                <p><strong>puh: </strong>040 67890 780</p>
                </div>
                
        

            </div>
        </div>
            
        //     <div>







        //         <div>
        //         <h1>Pelaajat</h1>
        //         {this.props.lista.map(pelaaja =>
        //         <div key={pelaaja.id}>
        //             {pelaaja.etunimi} {pelaaja.sukunimi}
        //         </div>
        //             )}
        //     </div>
   

        // </div>


        );
    }
}

export default Pelaajakortti;