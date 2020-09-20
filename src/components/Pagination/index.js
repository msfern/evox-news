import React from 'react';

import './style.scss';

function Pagination({ pageNumbers, setCurrentPage, currentPage }) {
  return (
    <nav className="pagination">
      <ul className="page-list">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              type="button"
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
