import React from 'react';
import './styles/Client.sass'

const Client = ({client, deleteClient}) => {
  return(
    <div className="client">
      <div className="card">
        <div className="card-header">
          {client.company}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><i className="fa fa-user"></i> {client.name}</li>
          <li className="list-group-item"><i className="fa fa-phone"></i> {client.phone}</li>
          <li className="list-group-item"><i className="fa fa-envelope"></i> {client.email}</li>
        </ul>
        <div className="card-footer">
          <button 
            className="btn btn-danger"
            onClick={() => deleteClient(client.id)}
          >
            Borrar cliente
          </button>
        </div>
      </div>
    </div>
  )
}

export default Client;