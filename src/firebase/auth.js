import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCzveNCXUcTE6R5HcfjeFR380e-uWqVVl8",
    authDomain: "kopselainen.firebaseapp.com",
    databaseURL: "https://kopselainen.firebaseio.com",
    projectId: "kopselainen"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export {
    auth
};