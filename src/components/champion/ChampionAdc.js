import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CurrentChamp extends Component {
  constructor(props) {
    super(props);

       this.state = ({
          isLoading: true,
          name: '',
          id: ''

       })
  }

  componentDidMount() {
    fetch('/search-location-champ')
    .then(res => res.json())
    .then(data => {
      if(data.data.cod === '404') {
        this.setState({
          isLoading: false,
          cityNotFound: '404'
        })
      } else {
         // Determine weather icon
        
           this.setState({
              isLoading: false,
              name: data.name,
              id: data.id

           });
      }
    })
    .catch(err => {
       console.log(err);
    })  
  }

  render() {
    const WeatherCardError = (
       <div className='weatherCardContainer'>
         <div className='weatherCardError'>
           
               <p> Whoa! Looks like there was an error with your zipcode.</p>
            <Link to='/'><button>Try Again</button></Link>
         </div>
       </div>
    )

    const WeatherConditions = (
      this.state.cityNotFound == 404 ? <div> { WeatherCardError } </div> :
      <div>
         <div className='homeBtn'>
             <Link to='/'><button>Home</button></Link>
         </div>
         <div className='weatherCardContainer'>
            <div className='weatherCard'>
      
           <div className='conditionsOverview'>
              <p>{this.state.name}</p>
              <p>{this.state.id}</p>
           </div>
           <div className='conditionDetails'>
             
           </div>
            </div> 
         
         </div>
      </div>
    )

    const LoadingDisplay = (
       <div className='loading'>
          
       </div>
    )

    const CurrentWeatherCard = ( 
       this.state.isLoading === true ? <div> {LoadingDisplay} </div> : <div> {WeatherConditions} </div>
    )

    return (
       <div>
               { CurrentWeatherCard }
       </div>
    )
  }
}

export default CurrentChamp;