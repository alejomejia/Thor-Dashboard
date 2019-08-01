import React from 'react';

import Client from './Client';

const ClientsList = ({clients, deleteClient}) => {
  return (
    <div className="clients-list">
      <div className="row">
        <div className="col-md-4">
          {clients.map( client => (
            <Client 
              key={client.id}
              client={client} 
              deleteClient={deleteClient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientsList;