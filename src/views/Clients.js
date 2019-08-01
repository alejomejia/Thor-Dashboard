import React, { Component } from 'react';

import ClientsForm from '../components/ClientsForm';

class Clients extends Component {

  // Store clients from the Form data
  state = {
    clients : []
  }

  // To get ClientsForm data
  addNewClient = data => {

    // Copy actual state
    const newClient = [...this.state.clients, data];

    // Add tne new client data to the array
    this.setState({
      clients : newClient
    });

  }

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