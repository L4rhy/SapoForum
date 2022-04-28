import  firebase  from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVa82i7g3fwPMTUbbYqR7X4OrCNkHojHU",
    authDomain: "sapoforum-e9d95.firebaseapp.com",
    projectId: "sapoforum-e9d95",
    storageBucket: "sapoforum-e9d95.appspot.com",
    messagingSenderId: "508797172806",
    appId: "1:508797172806:web:24b1fa25da5ab1fd54de47"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    const app = firebase.initializeApp(firebaseConfig)
  }
const auth = firebase.auth()
export {firebase, auth}