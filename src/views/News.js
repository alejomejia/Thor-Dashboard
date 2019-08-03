import React, { Component , Fragment } from 'react';

import PageTitle from '../components/PageTitle';

class News extends Component {

  // Create empty state to store news api json
  state = {
    news : []
  }

  // In this lifecycle function, do the api petition
  componentDidMount(){
    this.askForNews();  
  }

  // Function to ask the api for news information and store it in the state
  askForNews = async () => {

    const apikey = '06bc37e3bc154006bcf9ab61e4aabb0f';
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=${apikey}`;
    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news : news.articles
    });
    
  }

  render(){
    return(
      <Fragment>
        <PageTitle title="News" />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default News;