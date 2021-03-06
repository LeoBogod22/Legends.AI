import React, { Component } from 'react';

import logo from './logo.svg';

// import MatchUp from './components/MatchUp';
import './index.css';
import './App.css';
import PersonList from './components/PersonList'
import PersonInput from './components/PersonInput'
import { Link } from 'react-router-dom';
import Login from "./Login";
import app from "./config/dev";
import SignUp from "./SignUp";
import Stats from "./components/summoner/stats";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import NavigationBar from './components/Navbar';

import MatchUp from './components/matchup/MatchUp';
import Champion from './components/champion/Champion';

import CurrentChamp from './components/champion/ChampionAdc';

class App extends Component {


 
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {

     const { authenticated, loading } = this.state;
      if (loading) {
      return <p>Loading..</p>;
    }


    return (
     <div className="App">

   
    
        <Router>
        
        <div>


         <NavigationBar />

     <Switch>
              {/* <Route exact path='/champions/:id' component={OneChamp} /> */}
              <Route exact path='/champions/:name' component={Champion} />

                <Route exact path='/' component={PersonInput} />
                <Route exact path='/champions' component={PersonList} />
              <Route path="/matchup" component={MatchUp} />              

              {/* <Route exact path="/MatchUp/:id/weakid" component={MatchUp} />
              <Route exact path='/champions/:name' component={Champion} /> */}

              <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                     <Route exact path="/signout" component={PersonList} />
                       <Route exact path="/stats/:data" component={Stats} />

                       <Route exact path='/current-weather' component={CurrentChamp}/>
            </Switch>
 

   </div>
</Router>
   </div>
    );
  }
}

export default App;