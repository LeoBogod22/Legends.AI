import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import PropTypes from 'prop-types'

import { List } from 'react-virtualized'
import matchSorter from 'match-sorter'
import Downshift from 'downshift'
// import champions from '../../utils/champions'
import { ChampsRef } from '../reference';
import { connect } from 'react-redux'
import * as actions from '../../actions/champs';
import { Link, Redirect, Router, Route, Switch } from 'react-router-dom';

function advancedFilter(theItems, value) {
  return value
    ? matchSorter(theItems, value, {
      keys: ['name'],
    })
    : theItems
}

class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      inputValue: '',
      champions: [],
      items: [],
      isRedirect: false
    };

    this.onItemSelected = this.onItemSelected.bind(this);
    this.getNextLink = this.getNextLink.bind(this);
    this.getRedirectLink = this.getRedirectLink.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    ChampsRef.on('value', snap => {
      let champs = []
      snap.forEach(shot => {
        champs.push({ ...shot.val(), key: shot.key });
      });
      this.setState({ champions: champs, items: champs });
    });
  }

  handleStateChange = changes => {
    if (changes.hasOwnProperty('inputValue')) {
      const { inputValue } = changes
      this.setState({ inputValue, items: advancedFilter(this.state.champions, inputValue) })
    }
  }

  onItemSelected(champ_id) {
    this.downshift.clearSelection();
    if (this.props.isMatchChampion) {
      this.props.selectMatchUpChampion(champ_id);
      
    }
    else {
      this.props.selectChampion(champ_id);

    }
  }

  getNextLink(name) {
    if (this.props.isMatchChampion) {
      return `/matchup/${this.props.champ.name}/${name}`
    }
    else {
      if (this.props.isMatchup) {
        return `/matchup/${name}/${this.props.matchchamp.name}`
      }
      else {
        return `/champions/${name}`
      }
    }
  }

  getRedirectLink() {
    if (this.props.isMatchup) {
      return `/matchup/${this.props.champ.name}/${this.props.matchchamp.name}`
    }
    else {
      return `/champions/${this.props.champ.name}`
    }
  }

  onChange(champ_id) {
    this.onItemSelected(champ_id);
    this.setState({ isRedirect: true })    
  }

  renderRedirect = () => {
    if (this.state.isRedirect === true) {
      return <Redirect push to={this.getRedirectLink()} />
    }
  }

  render() {
    // {this.renderRedirect()}
    if (this.state.isRedirect === true) {
      return <Redirect to={this.getRedirectLink()} />
    }

    return (
      <div class="cs-typeahead" >
        <div class="input-group input-group-sm" >
          <Downshift
            ref={downshift => (this.downshift = downshift)}
            inputValue={this.state.inputValue}
            itemToString={item => (item ? item.name : '')}
            onStateChange={this.handleStateChange}
            itemCount={this.state.items.length}            
            // onChange={item => item ? this.onChange(item.id) : null}
          >
            {({
              getInputProps,
              getItemProps,
              isOpen,
              selectedItem,
              highlightedIndex,
            }) => (
                <div>
                  <input {...getInputProps()} />
                  {isOpen ? (
                    <List
                      style={{ position: 'absolute', zIndex: 2 }}
                      width={215}
                      scrollToIndex={highlightedIndex || 0}
                      height={200}
                      rowCount={this.state.items.length}
                      rowHeight={40}
                      rowRenderer={({ key, index, style }) => (
                        <Link to={this.getNextLink(this.state.items[index].name)} onClick={()=> this.onItemSelected(this.state.items[index].id)} >
                        <div className="container"
                          {...getItemProps({
                            item: this.state.items[index],
                            index,
                            style: {
                              ...style,
                              display: 'flex',
                              borderBottom: '1px solid #ebeced',
                              textAlign: 'left',
                              alignItems: 'center',
                              backgroundColor:
                                highlightedIndex === index ? '#0275d8' : 'white',
                              color:
                                highlightedIndex === index ? 'white' : 'black',
                              fontWeight:
                                selectedItem === this.state.items[index] ? 'bold' : 'normal',
                            },
                          })}
                        >

                          <div className="row" style={{ flex: 1 }}>
                            <img class="cs-champion-list-icon" src={this.state.items[index].img} />
                          </div>
                          <div className="row" style={{ flex: 2 }}>
                            {this.state.items[index].name}
                          </div>
                        </div>
                        </Link>
                      )}
                    />
                  ) : null}
                </div>
              )}
          </Downshift>

          <span class="input-group-btn">
            <button class="btn btn-primary" type="button">
              <i class="fa fa-fw fa-search"></i>
            </button>
          </span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    selectChampion: (id) => { dispatch(actions.getsinglechamp(id)) },
    selectMatchUpChampion: (id) => { dispatch(actions.getmatchchamp(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);