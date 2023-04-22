import ReactModal from "react-modal";
import Create from "../pages/create/Create";
import Button from "./Button";
const Modal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
          maxWidth: "350px",
          maxHeight: "80vh",
          overflowY: "auto",
        },
      }}
    >
      <Create />
      <Button
        text="Close"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
        onClick={handleClose}
      >
        Zamknij
      </Button>
    </ReactModal>
  );
};

export default Modal;
