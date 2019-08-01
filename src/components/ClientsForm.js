import React, { Component } from 'react';

class ClientsForm extends Component {

  // Values of the form that I want to save
  state = {
    client : {
      name : '',
      company : '',
      email : '',
      phone : ''
    }
  }

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

  render() {
    return (
      <form>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Client name"
            name="name"
            onChange={this.handleChange}
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
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary bg-dark">Create new client</button>
      </form>
    );
  }
}

export default ClientsForm;