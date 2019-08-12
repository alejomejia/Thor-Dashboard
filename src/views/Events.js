import React, { Component } from 'react';

import EventsCategoryContext from '../context/EventsCategoryContext';
import EventsResultsContext from '../context/EventsResultsContext';

import PageTitle from '../components/PageTitle';
import EventsForm from '../components/Events/EventsForm';

class Events extends Component {
  render() {
    return (
      <EventsResultsContext>
        <EventsCategoryContext>
          <PageTitle title="Events" />
          <div className="content-wrapper">
            <div className="container-fluid">
              <EventsForm />
              { /* <NewsList news={this.state.news} /> */ }
            </div>
          </div>
        </EventsCategoryContext>
      </EventsResultsContext>
    );
  }
}

export default Events;