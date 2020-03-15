import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

import { getStartStopDates } from "../../services/companyDetails";

export const DateRange = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const incomes = useSelector(store => store.companyDetails.incomes);

  useEffect(() => {
    if (Boolean(incomes)) {
      getStartStopDates(incomes).then(({ minDate, maxDate }) => {
        if (minDate && maxDate) {
          setStartDate(new Date(minDate));
          setEndDate(new Date(maxDate));
        }
      });
    }
  }, [incomes]);

  return (
    <div className="company-details__date-range">
      <p>SELECT INCOME DATE RANGE</p>
      <div className="company-details__datepickers">
        <div className="company-details__datepicker">
          <p>START DATE</p>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
        <div className="company-details__datepicker">
          <p>STOP DATE</p>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            maxDate={endDate}
          />
        </div>
      </div>
    </div>
  );
};
