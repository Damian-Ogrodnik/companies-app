/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCompanyDetails } from "../../redux/dataCompany/dataCompanyUtils";
import { getLastMonthIncome, getIncomes } from "../../services/companyDetails";

import { DateRange } from "../DateRange";

export const CompanyDetails = ({
  basicData: { id, city, name },
  openModal
}) => {
  const [lastMonthIncome, setLastMonthIncome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [averageIncome, setAverageIncome] = useState(0);
  const dispatch = useDispatch();
  const incomes = useSelector(store => store.companyDetails.incomes);
  const startDate = useSelector(store => store.companyDetails.startDate);
  const stopDate = useSelector(store => store.companyDetails.stopDate);

  useEffect(() => {
    if (openModal) {
      dispatch(fetchCompanyDetails(id));
    }
  }, [openModal]);

  useEffect(() => {
    if (openModal) {
      getLastMonthIncome(incomes).then(sum => setLastMonthIncome(sum));
    }
  }, [incomes]);

  useEffect(() => {
    if (openModal)
      getIncomes(startDate, stopDate, incomes).then(
        ({ totalIncome, averageIncome }) => {
          setTotalIncome(totalIncome);
          setAverageIncome(averageIncome);
        }
      );
  }, [startDate, stopDate, incomes]);

  return (
    <div className="company-details">
      <h2>DETAILS</h2>
      <div className="company-details__header">
        <p>ID</p>
        <p>NAME</p>
        <p>CITY</p>
      </div>
      <div className="company-details__basic-info">
        <p>{id}</p>
        <p>{name}</p>
        <p>{city}</p>
      </div>
      <div className="company-details__incomes">
        <div className="company-details__incomes income">
          <p>TOTAL INCOME</p>
          <p>{totalIncome}</p>
        </div>
        <div className="company-details__incomes income">
          <p>AVERAGE INCOME</p>
          <p>{averageIncome}</p>
        </div>
        <div className="company-details__incomes income">
          <p>LAST MONTH INCOME</p>
          <p>{lastMonthIncome}</p>
        </div>
      </div>
      <DateRange />
    </div>
  );
};
