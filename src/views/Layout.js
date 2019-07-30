import React, { Fragment } from 'react';

import Sidenav from '../components/Sidenav';

function Layout(props){

  return(
    <Fragment>
      <Sidenav />
      {props.children}
    </Fragment>
  )

}

export default Layout;