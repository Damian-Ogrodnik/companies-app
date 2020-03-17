import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import { reset } from "../../redux/dataCompany/dataCompanyActions";

import { CompanyDetails } from "../CompanyDetails/";

export const CompanyDetailsModal = ({ basicData, openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  const error = useSelector(store => store.companyDetails.error);
  const loading = useSelector(store => store.companyDetails.loading);

  Modal.setAppElement("body");

  const handleClose = () => {
    setOpenModal(false);
    dispatch(reset());
  };

  return (
    <Modal
      isOpen={openModal}
      contentLabel="details"
      className="modal"
      overlayClassName="overlay"
    >
      <CompanyDetails
        loading={loading}
        error={error}
        basicData={basicData}
        openModal={openModal}
      />
      <div className="company-details__close">
        <button onClick={() => handleClose()}>X</button>
      </div>
    </Modal>
  );
};
