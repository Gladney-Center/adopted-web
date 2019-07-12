import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCoKiL8H0_ztRhZTBk4fXfmOSt_ANuseZg",
    authDomain: "adopted-web.firebaseapp.com",
    databaseURL: "https://adopted-web.firebaseio.com",
    projectId: "adopted-web",
    storageBucket: "adopted-web.appspot.com",
    messagingSenderId: "820798129006",
    appId: "1:820798129006:web:b439478e6234f7c0"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()