import ReactModal from "react-modal";
import Create from "../pages/create/Create";
import Button from "./Button";
const Modal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Przykładowy modal"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75"
      className="mx-8 my-24 bg-white rounded-lg shadow-lg border border-gray-300 max-w-lg max-h-80vh overflow-y-hidden px-4 py-4"
    >
      <Create />
      <Button
        text="Close"
        onClick={handleClose}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      />
    </ReactModal>
  );
};

export default Modal;
