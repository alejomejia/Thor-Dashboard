import React from 'react';
import PropTypes from 'prop-types';

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

ClientsList.propTypes = {
  clients : PropTypes.array.isRequired,
  deleteClient : PropTypes.func.isRequired
}

export default ClientsList;