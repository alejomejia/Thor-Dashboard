import React, { Component } from 'react';

import ClientsForm from '../components/ClientsForm';
import ClientsList from '../components/ClientsList';

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

  // Delete client added when click on Delete
  deleteClient = clientId => {
    
    // Make a copy of the actual state
    const actualClients = [...this.state.clients];

    // Filter by Id, return what I want to keep (delete the click one)
    const clients = actualClients.filter( client => client.id !== clientId );

    // Update clients state to delete
    this.setState({
      clients
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
            <ClientsList 
              clients={this.state.clients} 
              deleteClient={this.deleteClient} 
            />
          </div>
        </div>
      </div>
    )
  }

}

export default Clients;