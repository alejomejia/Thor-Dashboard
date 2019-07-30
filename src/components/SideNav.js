import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/SideNav.sass';

import LOGO from '../images/logo.png';

class Sidenav extends Component {

  render(){
    return(
      <div id="sidenav" className="sidenav">
        <div className="sidenav-brand">
          <Link to="/">
            <img className="img-fluid" src={LOGO} alt="Thor Dashboard logo" />
          </Link>
        </div>
        <div className="sidenav-menu">
          <ul className="sidenav-menu-items">
            

          </ul>
        </div>
      </div>
    )
  }

}

export default Sidenav;