import React, { Component } from 'react';
import Kirjaudu from './Kirjaudu.js';

class KirjauduSivu extends Component {

    render() {
        return (
            <div>
                <div>
                 <div className="kirjaudu_bg">
                    <h2>kotikenttä </h2>
                    <Kirjaudu />
                    </div>
                </div>
            
            </div>
        );
    }
}

export default KirjauduSivu;