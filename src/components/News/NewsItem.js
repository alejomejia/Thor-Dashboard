import React from 'react';
import PropTypes from 'prop-types';
import './styles/NewsItem.sass';

const NewsItem = ({item}) => {

  const {
    urlToImage, 
    title, 
    author, 
    description, 
    url
  } = item;

  return (
    <div className="news-item">
      <div className="card">
        <img src={urlToImage} alt="News item" className="img-fluid card-img-top" />
        <div className="card-body">
          <div className="card-title">
            <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">{title}</a>
          </div>
          <div className="card-subtitle mb-2 text-muted">{author}</div>
          <p className="card-text">{description}</p>
          <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
}

// Documentation
NewsItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default NewsItem;