import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import config from '../config'

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()