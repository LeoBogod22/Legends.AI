import React, { Component } from 'react';
import SearchBar from '../common/SearchBar';
import UserAvatar from '../common/UserAvatar';
import app from "../../config/dev";
import axios from 'axios'
import { connect } from 'react-redux';
import { getsinglechamp } from '../../actions/champs';
import { Link } from 'react-router-dom';
import { ChampsRef, CommentsRef, timeRef } from '../reference';
class ChampionTitle extends Component {
  constructor(props) {
    super(props);
  
   this.state = {
       display : false,
       authenticated: false
    };

    this.delta = this.delta.bind(this);
}



componentDidMount() {

app.auth().onAuthStateChanged((user) => {
     
 
     
 
    if (user) {

      this.setState({
        currentUser: user,
        email: user.email,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
      });
  }

 

  delta() {
  this.setState({
    display: true
  });
}

 handleChange = event => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();


let id = CommentsRef.push().key;
        const NewComment= {
          id: id,
          vote: 0,
          champ_id: this.props.champ.id,
          text: this.state.text,
            timestamp: timeRef
          };



  if (NewComment.text.length) {
     CommentsRef.push(NewComment);

   


}


  };

  render() { 
   console.log(this.props.champ);
    const {dispatch, loading} = this.props;
        return (

            

  
          <div className="row">
 {this.state.authenticated ? (
    <div>
 { (this.state.display === false) ? 


           <button className="btn btn-default" id="b" onClick={this.delta}> submit new counter tip </button>


         :   <form onSubmit={this.handleSubmit} id="form" style={{display:this.state.display}}>
                <label>
                 champ  Name:
                 
  <textarea className="form-control" id="name" rows="3"  value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} ></textarea>

                       
                </label>
    <label>
                <button type="submit" className="btn btn-primary mb-2" id="s">Submit</button>
                </label>
            </form>


                           }

                           </div>

                   ) : (
                        
                   <div className="col-lg-6">&#160;&#160;&#160;&#160;
             <Link to="/login" className="nav-link2"> Login  to post</Link> 

                 </div>      
          
        

         
    )}

                           


      <div className="container" >
        <div class="cs-champion-header row" style={{ justifyContent: 'center', }}>
          <div class="col-xs-12">
            <UserAvatar isYou={false} championID={this.props.champ.id} championName={this.props.champ.name} imgAvatar={this.props.champ.img} />
          </div>
          <SearchBar />
        </div>
      </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    champ: state.champs.champ
  }
}

export default connect(mapStateToProps, null)(ChampionTitle);
