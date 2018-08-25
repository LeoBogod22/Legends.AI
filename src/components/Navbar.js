


import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Redirect,Link } from 'react-router-dom';
import Searchresults from './searchresults';


import app from "../config/dev";
  import { Route , withRouter } from "react-router";

class NavigatioBar extends React.Component {


   constructor(props) {
    super(props);
    this.state={
     authenticated: false,
      currentUser: null,
       redirect: false,
        email: '',
        name: '',
 
    
      isOpen: false
    
   
  }
  this.toggle = this.toggle.bind(this);
  this.signout = this.signout.bind(this);

}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 signout(){
   app.auth().signOut().then((user) => {
    this.setState ({ redirect: true })
  
    })

}





componentWillMount() {

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
e 
handleSubmit = (e) => {
    e.preventDefault();
  

    this.props.history.push(`/champ/${this.state.name}`)

  }
render() {

     let content = null;

     if (content !==null ) {
        <Searchresults name={this.state.name} />
}

else {

  <p> h </p>

}
 

    let searchMake = ["Ahri","zed","Malphite","Talon", "Velkoz","Jax"];

    let names = searchMake.map((name, i) => {
      return (
        <option key={i} value={name}>
          {name}
        </option>
      )
    })



  const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/signout'/>;
     }
 const authenticated = this.state.authenticated;
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<Link to='/'><a className="navbar-brand" href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4ZhCsXYeyhMYuaOZTGVq2VkeAW9gvDcgOfdPZ1B0WbYaBvR4"/></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
               <a className="nav-link" href="#"><Link to='/champions'>Champs <span className="sr-only">(current)</span></Link></a>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            </li>
                 
                   {authenticated ? ( 

            <li className="nav-item">
           <a className="nav-link" onClick={this.signout}>signout</a> 
            </li>
                ) : (
            <li className="nav-item">&#160;&#160;&#160;&#160;
             <Link to="/login" className="nav-link"> Login </Link> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;

             {/* <Link to="/signup" className="nav-link"> signup </Link>  */}
                   
            </li>

         )}
          </ul>

                <form  onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0" id="crap">
                 <div className="col-3">
                <select className="form-control"
                    value={this.state.name}
                    onChange={(e)=>this.setState({name: e.target.value})}
                  >
                  <option value="" disabled selected>Champ</option>
                       {names}
                </select>
              </div>
          <div className="col-3">
                  <button 
                  type="submit"  id="ff" className="btn btn-success btn-block">Search</button>
              </div>
        
      </form>
    
        </div>
        {content}
      </nav>
     
                

   
    );
  }
};


export default withRouter(NavigatioBar);