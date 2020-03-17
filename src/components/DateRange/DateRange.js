import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

import { setDates } from "../../redux/dataCompany/dataCompanyUtils";
import { getStartStopDates } from "../../services/companyDetails";

export const DateRange = () => {
  const [maxDateRange, setMaxDateRange] = useState(null);
  const [minDateRange, setMinDateRange] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();

  const incomes = useSelector(store => store.companyDetails.incomes);

  useEffect(() => {
    if (Boolean(incomes)) {
      getStartStopDates(incomes).then(({ minDate, maxDate }) => {
        if (minDate && maxDate) {
          setStartDate(new Date(minDate));
          setEndDate(new Date(maxDate));
          if (!maxDateRange && !minDateRange) {
            setMinDateRange(new Date(minDate));
            setMaxDateRange(new Date(maxDate));
          }
        }
      });
    }
  }, [incomes, maxDateRange, minDateRange]);

  useEffect(() => {
    dispatch(setDates(startDate, endDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

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
            minDate={minDateRange}
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
            maxDate={maxDateRange}
          />
        </div>
      </div>
    </div>
  );
};
