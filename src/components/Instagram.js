// TÄÄ EI VIELÄ SKULAA, tuo vain yhden postauksen

import React, { Component } from "react";
import ig from '../img/ig.png';
import Iframe from "react-iframe";
import '../insta.css';

class Instagram extends Component {

    render() {
        return (
            <div>
                <div className="tapahtuma_bg">
                    <div className="ig_img"><img src={ig} alt="instagram"  /></div>
                    <div className="insta">
                        <Iframe width="404px" height="404px" url="https://www.instagram.com/p/Bqj00dSFYTB/embed"/>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Instagram;