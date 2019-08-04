import React, { Component , Fragment } from 'react';
import uuid from 'uuid';

import PageTitle from '../components/PageTitle';
import NewsForm from '../components/News/NewsForm';
import NewsList from '../components/News/NewsList';

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
  askForNews = async (category = 'general', country = 'co') => {

    const apikey = '06bc37e3bc154006bcf9ab61e4aabb0f';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}`;
    const response = await fetch(url);
    const news = await response.json();

    // Get only articles from the news data
    const articles = news.articles;

    // Add an ID to every article for mapping
    articles.map(article => (
      article.id = uuid()
    ))

    // Add the articles to news state
    this.setState({
      news : articles
    });

  }

  render(){
    return(
      <Fragment>
        <PageTitle title="News" />
        <div className="content-wrapper">
          <div className="container-fluid">
            <NewsForm askForNews={this.askForNews} />
            <NewsList news={this.state.news} />
          </div>
        </div>
      </Fragment>
    )
  }

}

export default News;