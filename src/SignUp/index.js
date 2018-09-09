import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { withRouter } from "react-router";
import app from "../config/dev";
import { UserRef, timeRef } from '../components/reference';
class SignUpContainer extends Component {

  
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password, rank } = event.target.elements;
 const NewChamp= {
          Elo: rank.value
          };
  try {
  const userCredential = await app
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value);

    console.log(userCredential.user.email);
    UserRef.child(userCredential.user.uid).set(NewChamp);

    alert("you have succseffully signed dup!!")
  this.props.history.push("/");
} catch (error) {
  alert(error);
}
};

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);