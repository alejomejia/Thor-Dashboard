import React from 'react';

const EventsItem = ({event}) => {

  return (
    <div className="events-item">
      <div className="card">
        {event.logo.url
          ? <img src={event.logo.url} alt={event.name} className="img-fluid card-img-top" />
          : null }
        <div className="card-body">
          <div className="card-title">
            <a href={event.url} className="card-link" target="_blank" rel="noopener noreferrer">{event.name.text}</a>
          </div>
          <p className="card-text">{event.summary}</p>
          <a href={event.url} className="card-link" target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default EventsItem;