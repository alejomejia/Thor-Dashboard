import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles/SideNavMenuItem.sass';

const SideNavMenuItem = ({path, icon}) => {
  return (
    <Fragment>
      <li className="sidenav-menu-item">
        <Link to={path}>
          <i className={'fa fa-' + icon}></i>
        </Link>
      </li>
    </Fragment>
  );
}

export default SideNavMenuItem;