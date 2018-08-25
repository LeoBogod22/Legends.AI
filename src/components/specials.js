import React, {Component} from 'react'
import axios from 'axios'
import {Upvote} from 'react-upvote';
import {arrowUp} from 'react-icons-kit/fa/arrowUp';
import {chevronDown} from 'react-icons-kit/fa/chevronDown'
import {chevronUp} from 'react-icons-kit/fa/chevronUp'
import { Icon } from 'react-icons-kit';
import app from "../config/dev";
import {Link} from 'react-router-dom';
import {ChampsRef, CommentsRef, timeRef} from './reference';
import {connect} from 'react-redux';
import {getsinglechamp} from '../actions/champs';
class Specials extends Component {

    state = {
        comments: [],
         vote: 0,

        champ_id: "",
        loading: true,
        email: ""

    };

    downvotePost(key, text, vote) {
  	// alert(id);
    // CommentsRef.child(id).transaction(function(Comments) {
    //   if (Comments) {
    //     Comments.vote++;
    //   }
    //  console.log('cc',Comments);
    //   return Comments;
    // });
    
    vote--;
    CommentsRef.child(key).update({'vote' : vote});
  }

upvotePost(key, text, vote) {
  	// alert(id);
    // CommentsRef.child(id).transaction(function(Comments) {
    //   if (Comments) {
    //     Comments.vote++;
    //   }
    //  console.log('cc',Comments);
    //   return Comments;
    // });
    
    vote++;
    CommentsRef.child(key).update({'vote' : vote});
  }
    componentWillMount() {
        const {dispatch, match} = this.props;
        dispatch(getsinglechamp(this.props.id));
        console.log(this.props);
    }

    componentDidMount() {

        const champ_id = this.props.id;
        CommentsRef.orderByChild('champ_id').equalTo(`${champ_id}`).on('value', (snap) => {
            const tasks = [];
            let comments = []
            snap.forEach(child => {
                comments.push({...child.val(), key: child.key});
            });
            this.setState({comments: comments, Loading: false});
        });
const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

  // Check if the user has visited the site (component) before.
  if (!hasVisitedBefore) {
    // If not, set the component state (or dispatch an action if you need)
    // Also set the localStorage so it's globally accessible.
    this.setState({ hasVisitedBefore: false });
    localStorage.setItem('hasVisitedBefore', true);
}

    }

    render() {


        const {dispatch, loading} = this.props;
        const {comments, ChampsLoading} = this.state;
        const orderedchamps = comments;


        let commentList;

        if (ChampsLoading) {
            commentList = <div className="TaskList-empty">Loading...</div>;

        }
        else if
        (comments.length) {

            commentList = (
                <ul className="TaskList">
                    {comments.map(comment => (

                        <div className="row">
                        <div className="col-lg-6">
                        <br></br> <br></br> <br></br>
                   
                        <div className="cs-counter-tips-list">
                        <div className="cs-counter-tip">
                      

                                 <button id="f" onClick={()=>this.upvotePost(comment.key, comment.text, comment.vote)}> <Icon  icon={chevronUp} /> </button>
                                     <div id="col" className="col-lg-6"> {comment.vote} </div>
                                 <button id="f" onClick={()=>this.downvotePost(comment.key, comment.text, comment.vote)}> <Icon  icon={chevronDown} /> </button>
                              <div><p className="cs-counter-tip-text">
                                      {comment.text}  </p> </div>
                                     

                                    

                        
                              </div></div>                          </div></div>
                      
                    ))}

                </ul>
            );
        }
        return (
                         <div className="container">
  

    
    <h1>Counter Tips</h1>
    
    <div className="brace"> </div>
    
   
                
                <p> {commentList} </p>

            
               
  </div> 

                
        );
    }


}


const mapStateToProps = (state) => {
    console.log('champs', state.champs);
    console.log(state.loading);
    return {
        champ: state.champs.champ,
        loading: state.loading
    }
}

export default connect(mapStateToProps, null)(Specials)