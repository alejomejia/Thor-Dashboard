import React, { Fragment } from 'react';

import SideNav from '../components/SideNav';

const Layout = props => {

  return(
    <Fragment>
      <SideNav />
      <div id="main-content">
        {props.children}
      </div> 
    </Fragment>
  )

}

export default Layout;