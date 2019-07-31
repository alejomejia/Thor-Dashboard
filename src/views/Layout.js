import React, { Fragment } from 'react';

import SideNav from '../components/SideNav';

function Layout(props){

  return(
    <Fragment>
      <SideNav />
      <div id="content" className="content">
        {props.children}
      </div> 
    </Fragment>
  )

}

export default Layout;