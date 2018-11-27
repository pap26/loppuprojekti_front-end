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
                    <div>
                        <Iframe className="insta" width="405px" height="405px" url="https://snapwidget.com/embed/627931"/>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Instagram;