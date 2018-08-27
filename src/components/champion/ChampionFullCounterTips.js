import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterTip from '../common/CounterTip';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { ChampsRef, CounterTipsRef, timeRef } from '../reference';
import app from "../../config/dev";

class ChampionFullCounterTips extends Component {
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
    this.getCounterTips(nextProps)
  }

  componentWillMount() {
    this.getCounterTips(this.props)
  }

  getCounterTips() {
    //Get CounterTipList
    const champ_id = this.props.champ.id;
    CounterTipsRef.orderByChild('parent_id').equalTo(`${champ_id}`).on('value', (snap) => {      
      let tipList = []
      snap.forEach(child => {
        tipList.push({ ...child.val(), key: child.key });
      });
      this.setState({ tipList: tipList, loading: false });
    });

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
export default connect(mapStateToProps, null)(ChampionFullCounterTips);