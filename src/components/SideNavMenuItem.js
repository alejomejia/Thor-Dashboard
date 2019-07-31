import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles/SideNavMenuItem.sass';

class SideNavMenuItem extends Component {
  render() {
    return (
      <Fragment>
        <li className="sidenav-menu-item">
          <Link to={this.props.path}>
            <i className={'fa fa-' + this.props.icon}></i>
          </Link>
        </li>
      </Fragment>
    );
  }
}

export default SideNavMenuItem;