import React from "react";
import Modal from "react-modal";

import { CompanyDetails } from "../CompanyDetails/";

const customStyles = {
  content: {
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#8d99ae",
    border: "0.25rem solid #2b2d42",
    borderRadius: "1rem"
  }
};

export const CompanyDetailsModal = ({ basicData, openModal, setOpenModal }) => {
  Modal.setAppElement("li");
  return (
    <Modal isOpen={openModal} style={customStyles} contentLabel="details">
      <CompanyDetails basicData={basicData} openModal={openModal} />
      <div className="company-details__close">
        <button onClick={() => setOpenModal(false)}>Close</button>
      </div>
    </Modal>
  );
};