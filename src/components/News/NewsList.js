import React from 'react';

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

export default NewsList;