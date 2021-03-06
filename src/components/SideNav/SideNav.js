import React from 'react';
import { Link } from 'react-router-dom';

import './styles/SideNav.sass';
import LOGO from '../../images/logo.png';

import SideNavMenu from './SideNavMenu';

const SideNav = () => {
  return(
    <div id="sidenav" className="sidenav">
      <div className="sidenav-brand">
        <Link to="/">
          <img className="img-fluid" src={LOGO} alt="Thor Dashboard logo" />
        </Link>
      </div>
      <SideNavMenu />
    </div>
  )
}

export default SideNav;