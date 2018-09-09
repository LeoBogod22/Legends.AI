
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDsTsClk8l2l5yLNu_eG-R06Usv4Oi_NvQ",
  authDomain: "d-ucukgx.firebaseapp.com",
  databaseURL: "https://d-ucukgx.firebaseio.com",
  projectId: "d-ucukgx",
  storageBucket: "d-ucukgx.appspot.com",
  messagingSenderId: "1031835936266"
};
firebase.initializeApp(config);



const databaseRef = firebase.database().ref();
export const ChampsRef = databaseRef.child("Champs");

export const UserRef = databaseRef.child("User");
export const CommentsRef = databaseRef.child("Comments");
export const CounterTipsRef = databaseRef.child("CounterTips");
export const authRef = firebase.auth();
export const timeRef = firebase.database.ServerValue.TIMESTAMP;

export default databaseRef;