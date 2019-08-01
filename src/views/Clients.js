import React, { Component } from 'react';

import ClientsForm from '../components/ClientsForm';

class Clients extends Component {

  render(){
    return(
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-3">
            <div className="card">
              <h5 className="card-header">Add new client</h5>
              <div className="card-body">
                <ClientsForm addNewClient={this.addNewClient} />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <h5 className="card-header">Clients list</h5>
              <div className="card-body">
                Clients list content
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default Clients;