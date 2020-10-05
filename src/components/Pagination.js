import React from "react";
import "./pagination.scss";

export const Pagination = ({ postsPerPage, totalPosts, onPageClick }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <button
                onClick={() => onPageClick(number)}
                href="#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
