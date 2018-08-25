import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import PropTypes from 'prop-types'

import { List } from 'react-virtualized'
import matchSorter from 'match-sorter'
import Downshift from 'downshift'
import champions from '../../utils/champions'

function advancedFilter(theItems, value) {
  return value
    ? matchSorter(theItems, value, {
      keys: ['id', 'name'],
    })
    : theItems
}

class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {      
      items: champions,
      inputValue: ''
    };
  }

  handleStateChange = changes => {
    if (changes.hasOwnProperty('inputValue')) {
      const { inputValue } = changes
      this.setState({ inputValue, items: advancedFilter(champions, inputValue) })
    }
  }

  render() {
    return (      
        <div class="cs-typeahead" >
          <div class="input-group input-group-sm" >
            <Downshift
              
              inputValue={this.state.inputValue}
              itemToString={i => (i ? i.name : '')}
              onStateChange={this.handleStateChange}
              itemCount={this.state.items.length}              
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
                        style={{ position: 'absolute',  zIndex: 1}}
                        width={215}
                        scrollToIndex={highlightedIndex || 0}
                        height={200}
                        rowCount={this.state.items.length}
                        rowHeight={40}
                        rowRenderer={({ key, index, style }) => (
                          
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
                            <div className = "row" style={{flex : 1}}>
                              <img class="cs-champion-list-icon" src={"http://ddragon.leagueoflegends.com/cdn/7.21.1/img/champion/Akali.png"}/>
                            </div>
                            <div className = "row" style={{flex : 2}}>
                              {this.state.items[index].name}
                            </div>
                          </div>
                          
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

export default SearchBar;