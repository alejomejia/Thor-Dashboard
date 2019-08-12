import React, { Component, Fragment } from 'react';

// Create context
const context = React.createContext();
export const EventsResultsConsumer = context.Consumer;

class EventsResultsContext extends Component {

  state = {
    events: []
  }

  getSearch = async (formdata) => {
    
    const apikey = 'MUQ7VDOI7BNDCLHV5T5E';
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${formdata.search}&categories=${formdata.category}&sort_by=date&token=${apikey}&locale=en_US`;

    const response = await fetch(url);
    const data = await response.json();
    const events = data.events;

    this.setState({
      events
    });
    

  }

  render() {
    return (
      <Fragment>
        <context.Provider
          value={{
            events : this.state.search,
            getSearch : this.getSearch
          }}
        >
          {this.props.children}
        </context.Provider>
      </Fragment>
    );
  }
}

export default EventsResultsContext;