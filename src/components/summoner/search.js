import React from 'react';
import axios from 'axios';
import { Route, withRouter } from "react-router";
const regions = [
  'NA',
  'EUW1',
  'EUNE',
  'LAN',
  'LAS',
  'KR',
  'BR',
  'JP',
  'OCE',
  'RU',
  'TR',
  'PBE'
];

class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      region: 'na',
      data: '',
      invalid: false
    };
  }


  onInput(e) {
    this.setState({ name: e.target.value });
  }

  onSelect(e) {
    this.setState({ region: e.target.value });
  }

  runOnEnter(e) {
    if (e.key === 'Enter') this.run();
  }
searchChampions(e) {
        e.stopPropagation()
        e.preventDefault()

       axios.post("http://localhost:5000/search-champ", {
                                       champname:this.refs.query.value,
                                       region: this.state.region
    }).then((data)=>{
           this.setState({data: data.values});
           this.props.history.push(`/stats/${this.state.name}`)

           console.log(this.state.data);

    })
}

  render() {
    const { name, invalid, region } = this.state;

    return (
      <div id="input-box">
  
        <input ref="query"
          id="summoner-name-input"
          placeholder="name"
          name="name"
          onChange={e => this.onInput(e)}
          onKeyPress={e => this.runOnEnter(e)}
        />
     
        <select
          id="region-select"
          value={region}
          onChange={e => this.onSelect(e)}
        >
          {regions.map(r => (
            <option key={r} value={r.toLowerCase()}>
              {r}
            </option>
          ))}
        </select>
        <button id="search-btn" onClick={e => this.searchChampions(e)}>
          Go
        </button>
      </div>
    );
  }
}

export default withRouter(Search);