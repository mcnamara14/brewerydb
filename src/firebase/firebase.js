import * as firebase from 'firebase';
import { firebaseApiKey } from './firebaseApiKey';
console.log('hello')
const config = {
  apiKey: firebaseApiKey,
  authDomain: "brewery-db-c591d.firebaseapp.com",
  databaseURL: "https://brewery-db-c591d.firebaseio.com",
  projectId: "brewery-db-c591d",
  storageBucket: "brewery-db-c591d.appspot.com",
  messagingSenderId: "1002497107199"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth
};