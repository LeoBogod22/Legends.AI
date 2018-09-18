import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterTip from '../common/CounterTip';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ChampsRef, CounterTipsRef, timeRef } from '../reference';
import app from "../../config/dev";

class MatchUpFullCounterTips extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {     
      tipList: [],
      loading: true,      
      parentID:""
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.getParentID(nextProps)
  }

  componentWillMount() {
    this.getParentID(this.props)
  }

  getParentID(props) {
    let currentComponent = this;    

    //Check Login
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

    //Get Matchup ID    
    ChampsRef.child(`${props.champ.id}/matchup`).orderByChild('champ_id').equalTo(`${props.matchchamp.id}`).on('value', (snapshot) => {                
      this.state.tipList = [];
      this.state.parentID = "";
      var count = 0;      
      snapshot.forEach(child => {
        if (count == 0) {                
          currentComponent.setState({
            parentID: child.key
          });
          currentComponent.getCounterTips(child.key);
        }
        count++;
      });

      this.setState({ loading: false });
    });
  }

  componentWillMount(){
    //Get CounterTipList        
    CounterTipsRef.orderByChild('matchup_id').equalTo(`${this.props.matchchamp.id}`).on('value', (snap) => {            
      let tipList = []
      
      snap.forEach(child => {
        tipList.push({ ...child.val(), key: child.key });
      });
      this.setState({ tipList: tipList, loading:false});      
    });
  }

  render() {
    const { tipList, loading, authenticated } = this.state;

    let counterTips;
    if (loading) {
      counterTips = <div className="TaskList-empty">Loading...</div>;
    } else {
      counterTips = (
        <div>          
          <div className="row" class="cs-counter-tips-list">
            {tipList.map((tip, index) =>
              <CounterTip counterTip={tip} />
            )}
            {counterTips}
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="row" style={{justifyContent:'center'}}>        
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="javascript:;" />
              </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="javascript:;">
                1
              </PaginationLink>
            </PaginationItem>          
            <PaginationItem>
              <PaginationLink next href="javascript:;" />
            </PaginationItem>
          </Pagination>        
        </div>
        
        {counterTips}

        <div className="row" style={{justifyContent:'center'}}>        
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="javascript:;" />
              </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="javascript:;">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="javascript:;" />
            </PaginationItem>
          </Pagination>        
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    champ: state.champs.champ,
    matchchamp: state.champs.matchchamp
  }
}
export default connect(mapStateToProps, null)(MatchUpFullCounterTips);