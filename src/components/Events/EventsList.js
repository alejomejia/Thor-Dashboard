import React from 'react';
import './styles/EventsList.sass';

import EventsItem from './EventsItem';

import { EventsResultsConsumer } from '../../context/EventsResultsContext';

const EventsList = () => {
  return(
    <div className="events-list">
      <div className="card-columns">
        <EventsResultsConsumer>
          {(value) => {
            return(
              value.events.map( event => (
                <EventsItem key={event.id} event={event} />
              ))
            )
          }}
        </EventsResultsConsumer>
      </div>
    </div>
  );
}

export default EventsList;