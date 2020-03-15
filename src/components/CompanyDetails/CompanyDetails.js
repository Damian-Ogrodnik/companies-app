import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { fetchCompanyDetails } from "../../redux/dataCompany/dataCompanyUtils";
import { getLastMonthIncome } from "../../services/companyDetails";

const customStyles = {
  content: {
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export const CompanyDetails = ({
  basicData: { id, income, name, city },
  openModal,
  setOpenModal
}) => {
  const [lastMonthIncome, setLastMonthIncome] = useState(0);
  const dispatch = useDispatch();
  const incomes = useSelector(store => store.companyDetails.incomes);

  Modal.setAppElement("li");

  useEffect(() => {
    if (openModal) {
      dispatch(fetchCompanyDetails(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  useEffect(() => {
    if (openModal) {
      getLastMonthIncome(incomes).then(sum => setLastMonthIncome(sum));
      //setLastMonthIncome(monthIncome);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incomes]);

  return (
    <Modal isOpen={openModal} style={customStyles} contentLabel="Example Modal">
      <div className="company-details">
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
            <p>{income}</p>
          </div>
          <div className="company-details__incomes income">
            <p>AVERAGE INCOME</p>
            <p>8778</p>
          </div>
          <div className="company-details__incomes income">
            <p>LAST MONTH INCOME</p>
            <p>{lastMonthIncome}</p>
          </div>
        </div>
        <div className="company-details__close">
          <button onClick={() => setOpenModal(false)}>Close</button>
        </div>
      </div>
    </Modal>
  );
};
