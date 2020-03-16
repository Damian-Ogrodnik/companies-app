import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { paginateCompanies } from "../../redux/pagination/paginationUtils";

export const Pagination = ({ postsPerPage = 10, companies }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculatePages = async () => {
      let newArray = [];
      for (let i = 1; i <= Math.ceil(companies.length / postsPerPage); i++) {
        newArray.push(i);
      }
      setPageNumbers(newArray);
    };
    calculatePages();
    setActive(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companies]);

  const paginate = pageNumber => {
    dispatch(paginateCompanies(pageNumber, companies));
    setActive(pageNumber);
  };

  const pageUp = () => {
    let upNumber =
      active === pageNumbers.length ? pageNumbers.length : active + 1;
    dispatch(paginateCompanies(upNumber, companies));
    setActive(upNumber);
  };

  const pageDown = () => {
    let downNumber = active - 1 === 0 ? 1 : active - 1;
    dispatch(paginateCompanies(downNumber, companies));
    setActive(downNumber);
  };

  const renderPagination = () => {
    let start,
      stop = 0;

    if (active < 6) {
      start = 0;
      stop = 10;
    } else if (active > pageNumbers.length - 9) {
      start = pageNumbers.length - 10;
      stop = pageNumbers.length;
    } else {
      start = active - 5 > 0 ? active - 5 : 0;
      stop = active + 5;
    }

    return pageNumbers.slice(start, stop).map(number => (
      <li
        key={number}
        className={"pagination__item" + (active === number ? "--active" : "")}
      >
        <button onClick={() => paginate(number)}>{number}</button>
      </li>
    ));
  };

  const renderIcon = left => {
    if (pageNumbers.length > 10) {
      if (left) {
        return (
          <IconContext.Provider value={{ className: "pagination__arrow left" }}>
            <FaArrowLeft onClick={() => pageDown()} />
          </IconContext.Provider>
        );
      } else {
        return (
          <IconContext.Provider
            value={{ className: "pagination__arrow right" }}
          >
            <FaArrowRight onClick={() => pageUp()} />
          </IconContext.Provider>
        );
      }
    }
  };

  return (
    <ul className="pagination">
      {renderIcon(true)}
      {renderPagination()}
      {renderIcon(false)}
    </ul>
  );
};
