import React from 'react';
import NewsCard from '../NewsCard/index';
import './style.scss';

function NewsList({ newsList }) {
  return (
    <main className="news-container">
      <ul>
        {newsList.map((news) => (
          <NewsCard
            key={news.title}
            source={news.source.name}
            author={news.author}
            title={news.title}
            description={news.description}
            url={news.url}
            urlToImage={news.urlToImage}
            publishedAt={news.publishedAt}
          />
        ))}
      </ul>
    </main>
  );
}

export default NewsList;
