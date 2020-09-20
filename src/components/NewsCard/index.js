import React from "react";
import { formatDate } from '../../utils/utils';
import "./style.scss";

function NewsCard(props) {

  return (
    <li className="news-card">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.urlToImage ?
        <img src={props.urlToImage} alt={props.title} />
        :
        <div className="image-placeholder"></div>
      }
        <div className='news-card-content'>
          <header className="news-card-header">
            <span className='header-tag'>{props.source}</span>
            <h2 className='header-title'>{props.title}</h2>
          </header>
          {props.description &&
            <p className="news-card-desc">{props.description}</p>
          }
          <footer className="news-card-footer">
          {props.author &&
            <p className="footer-author">{props.author}</p>
          }
            {props.publishedAt &&
              <p className="footer-date">{formatDate(props.publishedAt)}</p>
            }
          </footer>
        </div>
      </a>
    </li>
  )
}

export default NewsCard;
