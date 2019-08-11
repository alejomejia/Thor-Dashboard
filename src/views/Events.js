import React, { Component } from 'react';

import EventsContext from '../context/EventsContext';

import PageTitle from '../components/PageTitle';
import EventsForm from '../components/Events/EventsForm';

class Events extends Component {
  render() {
    return (
      <EventsContext>
        <PageTitle title="Events" />
        <div className="content-wrapper">
          <div className="container-fluid">
            <EventsForm />
            { /* <NewsList news={this.state.news} /> */ }
          </div>
        </div>
      </EventsContext>
    );
  }
}

export default Events;