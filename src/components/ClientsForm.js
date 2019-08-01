import React, { Component } from 'react';
import uuid from 'uuid';

// Init state to reset form values after submit
const initState = {
  client : {
    id: '',
    name : '',
    company : '',
    email : '',
    phone : ''
  }
}

class ClientsForm extends Component {
  
  // Copy initial state from const
  state = {...initState}

  // Function to capture what user type on form fields
  handleChange = e => {
    this.setState({
      client : {
        // Always make a copy of the saved data on the state
        ...this.state.client,
        [e.target.name] : e.target.value
      }
    });
  }

  // Function to get the info from form fields
  handleSubmit = e => {

    // Prevent page reload
    e.preventDefault();

    // Get info from fields after submit
    const newClientData = {...this.state.client}

    // Add an ID to map
    newClientData.id = uuid();

    // Send the data to this component prop
    this.props.addNewClient(newClientData);

    // Reset form fields values to the initial state (empty)
    this.setState({
      ...initState
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Client name"
            name="name"
            onChange={this.handleChange}
            value={this.state.client.name}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Client company"
            name="company"
            onChange={this.handleChange}
            value={this.state.client.company}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Client email"
            name="email"
            onChange={this.handleChange}
            value={this.state.client.email}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="number" 
            className="form-control" 
            placeholder="Client phone"
            name="phone"
            onChange={this.handleChange}
            value={this.state.client.phone}
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary bg-dark">Create new client</button>
      </form>
    );
  }
}

export default ClientsForm;