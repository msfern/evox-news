import React from 'react';
import { formatDate } from '../../utils/utils';
import './style.scss';

function NewsCard({
  url,
  urlToImage,
  title,
  source,
  description,
  author,
  publishedAt,
}) {
  return (
    <li className="news-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {urlToImage ? (
          <img src={urlToImage} alt={title} />
        ) : (
          <div className="image-placeholder" />
        )}
        <div className="news-card-content">
          <header className="news-card-header">
            <span className="header-tag">{source}</span>
            <h2 className="header-title">{title}</h2>
          </header>
          {description && <p className="news-card-desc">{description}</p>}
          <footer className="news-card-footer">
            {author && <p className="footer-author">{author}</p>}
            {publishedAt && (
              <p className="footer-date">{formatDate(publishedAt)}</p>
            )}
          </footer>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
