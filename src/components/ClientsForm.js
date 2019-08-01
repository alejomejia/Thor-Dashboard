import React, { Component } from 'react';

class ClientsForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Client name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Client company"
            name="company"
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Client email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="number" 
            className="form-control" 
            placeholder="Client phone"
            name="phone"
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary bg-dark">Create new client</button>
      </form>
    );
  }
}

export default ClientsForm;