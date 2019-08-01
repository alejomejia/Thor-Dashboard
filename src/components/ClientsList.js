import React from 'react';

import Client from './Client';

const ClientsList = ({clients, deleteClient}) => {
  return (
    <div className="clients-list">
      <div className="row">
        {clients.map( client => (
          <Client 
            key={client.id}
            client={client} 
            deleteClient={deleteClient}
          />
        ))}
      </div>
    </div>
  );
}

export default ClientsList;