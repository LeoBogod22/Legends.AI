
import * as firebase from "firebase";



  var firebaseConfig2 = {
    apiKey: "AIzaSyDsTsClk8l2l5yLNu_eG-R06Usv4Oi_NvQ",
    authDomain: "d-ucukgx.firebaseapp.com",
    databaseURL: "https://d-ucukgx.firebaseio.com",
    projectId: "d-ucukgx",
    storageBucket: "d-ucukgx.appspot.com",
    messagingSenderId: "1031835936266"
  };
  firebase.initializeApp(firebaseConfig2, "auth2");



  
var app = firebase.initializeApp(firebaseConfig2, "auth");
export default app;