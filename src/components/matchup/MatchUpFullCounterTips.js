import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpCounterTip from './MatchUpCounterTip';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class MatchUpFullCounterTips extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      isNewCounterTip: false      
    };

    this.handleNewCounterTip = this.handleNewCounterTip.bind(this);
    this.handleSubmitCounterTip = this.handleSubmitCounterTip.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
  }
  
  handleNewCounterTip() {
    this.setState({
      isNewCounterTip: true
    });
  }
  
  handleSubmitCounterTip() {
    this.setState({
      isNewCounterTip: false
    });
  }

  handleCancelSubmit() {
    this.setState({
      isNewCounterTip: false
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{justifyContent:'center'}}>        
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="#" />
              </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>        
        </div>
        <div className="row" class="cs-counter-tips-list">
          <MatchUpCounterTip />
          <MatchUpCounterTip />
          <MatchUpCounterTip />
          <MatchUpCounterTip />
          <MatchUpCounterTip />
          <MatchUpCounterTip />
        </div>

        <div className="row" style={{justifyContent:'center'}}>        
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="#" />
              </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>        
        </div>
      </div>
    );
  }
}

export default MatchUpFullCounterTips;