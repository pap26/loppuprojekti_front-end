import React, { Component } from 'react';

class Kartta extends Component {

    render() {
        return (
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.8667453094981!2d25.06350111578947!3d60.31526358201465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692070f376e848b%3A0x1cae5a5aedd5e69!2zS29pdnVreWzDpG52w6R5bMOkIDMyLCAwMTM2MCBWYW50YWEsIFN1b21p!5e0!3m2!1sfi!2sse!4v1542874640074" 
                width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>


            </div>
        );
    }
}

export default Kartta;