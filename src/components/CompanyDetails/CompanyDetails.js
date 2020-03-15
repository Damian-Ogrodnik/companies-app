import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import { fetchCompanyDetails } from "../../redux/dataCompany/dataCompanyUtils";

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
  const dispatch = useDispatch();

  Modal.setAppElement("li");

  useEffect(() => {
    if (openModal) dispatch(fetchCompanyDetails(id));
  }, [dispatch, id, openModal]);

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
            <p>4238</p>
          </div>
        </div>
        <div className="company-details__close">
          <button onClick={() => setOpenModal(false)}>Close</button>
        </div>
      </div>
    </Modal>
  );
};
