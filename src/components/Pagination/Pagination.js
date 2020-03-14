import React, { useEffect, useState } from "react";

export const Pagination = ({ postsPerPage = 10, companies }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const calculatePages = async () => {
      for (let i = 1; i <= Math.ceil(companies.length / postsPerPage); i++) {
        setPageNumbers(oldArray => [...oldArray, i]);
      }
    };
    calculatePages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companies]);

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className="pagination__item">
          <button>{number}</button>
        </li>
      ))}
    </ul>
  );
};
