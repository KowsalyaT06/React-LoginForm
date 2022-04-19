import { createPortal } from "react-dom";

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div>
          <span className="close" onClick={onClose}>
            X
          </span>
          <div className="content"></div>
          <span>{message}</span>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};
export default Modal;
