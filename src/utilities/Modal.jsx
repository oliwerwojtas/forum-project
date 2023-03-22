import ReactModal from "react-modal";
import Create from "../pages/create/Create";
import { useState } from "react";

const Modal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Przykładowy modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "2rem",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
          maxWidth: "600px",
          maxHeight: "80vh",
          overflowY: "auto",
        },
      }}
    >
      <Create />
      <button onClick={handleClose}>Zamknij</button>
    </ReactModal>
  );
};

export default Modal;
