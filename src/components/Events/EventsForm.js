import React, { Component } from 'react';

import { EventsCategoryConsumer } from '../../context/EventsCategoryContext';
import { EventsResultsConsumer } from '../../context/EventsResultsContext';

class EventsForm extends Component {

  state = {
    search: '',
    category: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <EventsResultsConsumer>
        {(value) => {
          return(
            <div className="events-form">
              <form onSubmit={e => {
                e.preventDefault();
                value.getSearch(this.state);
              }}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="search">Search for</label>
                      </div>
                      <input
                        type="text" 
                        id="search"
                        className="custom-select" 
                        name="search" 
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="category">Category</label>
                      </div>
                      <select 
                        id="category"
                        className="custom-select" 
                        name="category"
                        onChange={this.handleChange}>
                          <option value="">Select category</option>
                          <EventsCategoryConsumer>
                            {(value)=> {
                              return(
                                value.categories.map( category => (
                                  <option 
                                    key={category.id}
                                    value={category.id}
                                  >
                                    {category.name}
                                  </option>
                                ))
                              )
                            }}
                          </EventsCategoryConsumer>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <input 
                      type="submit"
                      value="Search event"
                      className="btn btn-primary d-block"
                    />
                  </div>
                </div>
              </form>
            </div>
          )
        }}
      </EventsResultsConsumer>
    );
  }
}

export default EventsForm;