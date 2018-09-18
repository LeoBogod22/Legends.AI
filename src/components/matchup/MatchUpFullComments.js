import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpComment from './MatchUpComment';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class MatchUpFullComments extends Component {

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
        <div className="container">
          <div className="row">
            <ul className="cs-comments-list list-unstyled">
              <MatchUpComment />
              <MatchUpComment />
              <MatchUpComment />
              <MatchUpComment />
            </ul>
          </div>
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

export default MatchUpFullComments;