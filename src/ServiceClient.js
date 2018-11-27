import Geocode from "react-geocode";

export function haeLokaatio(paikka, callback) {
    console.log("Saavuit haeLokaatio -funktioon")
    Geocode.setApiKey("AIzaSyB1WCsY3gI-ne0NNSftu5Srgl-cWzNcV8U");
    //Tämän alle voisi tehdä vielä try-catch-silmukan, jolla esim status code ZERO_RESULTS -virheen saisi napattua
    Geocode.fromAddress(paikka)
    .then(
        response => {
            console.log("Hakemasi paikka löytyy Googlen GeoCodesta")
            const { lat, lng } = response.results[0].geometry.location;
            callback(lat, lng);
        },
        error => {
            console.log("Virhe. Todennäköisesti hkemasi paikka ei löydy Googlen GeoCodesta")
            console.error(error);
            
        }
    );
}