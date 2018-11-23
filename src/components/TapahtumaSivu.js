import React, { Component } from 'react';
import Tapahtuma from './Tapahtuma.js';
import Instagram from './Instagram.js';
import Navigation from './Navigation.js';

// let tapahtumadata = [
//     {id:1, 
//     summary: "matsi : Harjoituspeli KOPSE valkoinen - FC Viikingit", 
//     //tapahtuman_nimi: "Harjoituspeli KOPSE valkoinen - FC Viikingit", 
//     start: {
//         dateTime: {
//         value: 1542812400000,
//         dateOnly: false,
//         timeZoneShift: 120
//         },
//         timeZone: "Europe/Helsinki"
//         },
//     end: {
//         dateTime: {
//         value: 1542816000000,
//         dateOnly: false,
//         timeZoneShift: 120
//         },
//         timeZone: "Europe/Helsinki"
//         },

//     dateTime: {
//         value: 1542812400000,
//         timeZoneShift: 120
//     },
//     location: "Havukoski TN, Koivukylänväylä 32, 01360 Vantaa",
//     in: true
//     }];

/*let tapahtumadata = [
    {id:1, 
    summary: "matsi : Harjoituspeli KOPSE valkoinen - FC Viikingit", 
    //tapahtuman_nimi: "Harjoituspeli KOPSE valkoinen - FC Viikingit", 
    start: {
        dateTime: {
        value: 1542812400000,
        dateOnly: false,
        timeZoneShift: 120
        },
        timeZone: "Europe/Helsinki"
        },
    end: {
        dateTime: {
        value: 1542816000000,
        dateOnly: false,
        timeZoneShift: 120
        },
        timeZone: "Europe/Helsinki"
        },

    dateTime: {
        value: 1542812400000,
        timeZoneShift: 120
    },
    location: "Havukoski TN, Koivukylänväylä 32, 01360 Vantaa",
    in: true
    }];
>>>>>>> front06

    */

class TapahtumaSivu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tapahtumat: []
        }

    }
    componentDidMount() {
        this.haeKymmenen();
    }
    haeKymmenen = () => {

    fetch('/api/kalenteri/kymmenen') 

        .then(response=> response.json())
        // yllä ole ennemmin response.json, koska usein haetaan jsonia
        .then(data=> {
            // jos haet esim jsonista kysysmys-tietoa, käytä json.kysymys
            this.setState({tapahtumat: data})
            });

    }; 





    render() {
        console.log(this.state.tapahtumat)
        //let eventit = this.state.tapahtumat.map(tapahtuma=>{
        //     // let alku = tapahtuma.start.dateTime.value; 
        //     // moment(alku).format("DD MMM YYYY hh:mm a")
        //     let paivays = new Date(tapahtuma.start.dateTime.value).toLocaleDateString("fi");
        //     let aloitusaika =  new Date(tapahtuma.start.dateTime.value).toLocaleTimeString("fi");
        //     let lopetusaika = new Date(tapahtuma.end.dateTime.value).toLocaleTimeString("fi");
        //     let kestonano = tapahtuma.end.dateTime.value - tapahtuma.start.dateTime.value;
        //     // let kesto= moment.duration(kestonano).format("h:mm");
        //     return (
        //     <li key={tapahtuma.id}> 
        //         {tapahtuma.description}||  
        //         {tapahtuma.summary} | |
        //         {tapahtuma.location} |  |
        //         {paivays}  || 
        //         {aloitusaika} ||
                // {lopetusaika} || 
                // {/* {kesto} */}
        //         {/* {} */}
        //     </li>
        //     )
        // });




        return (
            <div>
                <Navigation />
                <div className="tapahtuma_bg">
                <Tapahtuma lista={this.state.tapahtumat}/>
                </div>
                <div className="instagam">
                <Instagram />
                </div>

            </div>
        );
    }
}


export default TapahtumaSivu;