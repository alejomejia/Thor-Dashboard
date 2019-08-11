import React, { Component } from 'react';

class EventsForm extends Component {

  state = {
    search: '',
    category: ''
  }

  render() {
    return (
      <div className="events-form">
        <form>
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
                  name="category">
                    <option>Test</option>
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
    );
  }
}

export default EventsForm;