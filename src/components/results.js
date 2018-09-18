import React, { Component } from 'react';


const Home = () => {

   return (
      <div>
         <div className='header'>
            <h2>Search</h2>
         </div>

         <div className="instructions">
            <p>Enter a champ name</p>
         </div>

         <div className='zipcodeInput'>
	  <form method='POST' action='/search-champ'>
	     <input type='text' placeholder='Enter zipcode..' name='champname'/>
	     <button>ENTER</button>
	  </form>
         </div>
      </div>
   )
}

export default Home;