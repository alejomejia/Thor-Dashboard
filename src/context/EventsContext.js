import React, { Component, Fragment } from 'react';

// Create context
const context = React.createContext();
export const EventsConsumer = context.Consumer;

class EventsContext extends Component {

  state = {
    categories: []
  }

  componentDidMount(){
    this.getCategories();
  }

  getCategories = async () => {

    const apikey = 'MUQ7VDOI7BNDCLHV5T5E';
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${apikey}&locale=en_US`;
    
    const response = await fetch(url);
    const data = await response.json();

    const categories = data.categories;

    this.setState({
      categories
    });

  }

  render() {
    return (
      <Fragment>
        <context.Provider
          value={{
            categories : this.state.categories
          }}
        >
          {this.props.children}
        </context.Provider>
      </Fragment>
    );
  }
}

export default EventsContext;