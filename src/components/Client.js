import React from 'react';
import './styles/Client.sass'

const Client = ({client}) => {
  return(
    <div className="client">
      <div className="card">
        <div className="card-header">
          {client.company}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i className="fa fa-user"></i> {client.name}</li>
          <li class="list-group-item"><i className="fa fa-phone"></i> {client.phone}</li>
          <li class="list-group-item"><i className="fa fa-envelope"></i> {client.email}</li>
        </ul>
      </div>
    </div>
  )
}

export default Client;