import "./ConfirmationModal.css";

import useEscModalClose from "../../hooks/modalEscandOverlay";
import modalClose from "../../assets/modal-close.svg";

function ConfirmationModal({ onClose, isOpen, onLogin }) {
  useEscModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
          style={{ backgroundImage: `url(${modalClose})` }}
        />
        <h2 className="modal__title">Registration successfully completed!</h2>
        <button type="button" className="modal__sign-in" onClick={onLogin}>
          Sign in
        </button>
      </div>
    </div>
  );
}
export default ConfirmationModal;
