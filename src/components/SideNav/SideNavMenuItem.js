import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

// Documentation
SideNavMenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default SideNavMenuItem;