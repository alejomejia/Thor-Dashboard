import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from './NewsItem';

const NewsList = ({news}) => {
  return(
    <div className="news-list">
      <div className="card-columns">
        {news.map(newsItem => (
          <NewsItem
            key={newsItem.id}
            item={newsItem} 
          />
        ))}
      </div>
    </div>
  );
}

// Documentation
NewsList.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewsList;