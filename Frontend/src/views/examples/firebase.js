// import firebase from "firebase";
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyBk3o6lw1Y8ZiJzmIEB2ljT0tsdwITN8g0",
  authDomain: "fvast-717eb.firebaseapp.com",
  databaseURL: "https://fvast-717eb-default-rtdb.firebaseio.com/",
  projectId: "fvast-717eb",
  storageBucket: "fvast-717eb.appspot.com",
  messagingSenderId: "206838697985",
  appId: "1:206838697985:web:5e843bd734b83f92b5b000",
};

let fireDB = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
