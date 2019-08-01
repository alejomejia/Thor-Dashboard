import React, { Component , Fragment } from 'react';

import PageTitle from '../components/PageTitle';

class Dashboard extends Component {

  render(){
    return(
      <Fragment>
        <PageTitle title="Dashboard" />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                Dashboard
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default Dashboard;