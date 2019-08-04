import React, { Component } from 'react';

import './styles/SideNavMenu.sass';
import SideNavMenuItem from './SideNavMenuItem';

class SideNavMenu extends Component {

  render(){
    return(
      <div className="sidenav-menu">
        <ul className="sidenav-menu-items">
          <SideNavMenuItem path="/" icon="home" />
          <SideNavMenuItem path="/clients" icon="star" />
          <SideNavMenuItem path="/news" icon="coffee" />
          <SideNavMenuItem path="/events" icon="calendar" />
        </ul>
      </div>
    )
  }

}

export default SideNavMenu;