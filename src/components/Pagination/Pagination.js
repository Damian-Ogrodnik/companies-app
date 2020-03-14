import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { paginateCompanies } from "../../redux/pagination/paginationUtils";

export const Pagination = ({ postsPerPage = 10, companies }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculatePages = async () => {
      for (let i = 1; i <= Math.ceil(companies.length / postsPerPage); i++) {
        setPageNumbers(oldArray => [...oldArray, i]);
      }
    };
    calculatePages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companies]);

  const paginate = pageNumber => {
    dispatch(paginateCompanies(pageNumber, companies));
  };

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className="pagination__item">
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      ))}
    </ul>
  );
};
