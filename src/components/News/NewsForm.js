import React, { Component } from 'react';
import './styles/NewsForm.sass'

class NewsForm extends Component {

  state = {
    category: 'general'
  }

  handleChange = e => {

    // Asign the option value to state
    this.setState({
      category : e.target.value
    }, () => {
      // Send the value to change the API response with a callback
      this.props.askForNews(this.state.category);
    });
    
  }

  render() {
    return (
      <div className="news-form">
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
    );
  }
}

export default NewsForm;