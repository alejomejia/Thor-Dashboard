import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EventsForm extends Component {

  state = {
    search: '',
    categories: ''
  }

  render() {
    return (
      <div className="events-form">
        <div className="row">
          <div className="col-md-2">
            <form>
              { /* Category select */ }
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="category">Category</label>
                </div>
                <select 
                  id="category"
                  className="custom-select" 
                  name="category" 
                  onChange={this.handleChange}>
                  <option value="general">General</option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="health">Health</option>
                  <option value="science">Science</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-md-2">
            <form>
              { /* Country select */ }
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="country">Country</label>
                </div>
                <select 
                  id="country"
                  className="custom-select" 
                  name="country" 
                  onChange={this.handleChange}>
                  <option value="co">Colombia</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="de">Germany</option>
                  <option value="jp">Japan</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Documentation
EventsForm.propTypes = {
  askForNews: PropTypes.func.isRequired
}

export default EventsForm;