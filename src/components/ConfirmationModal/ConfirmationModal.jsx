import "./ConfirmationModal.css";

import escModalClose from "../../hooks/modalEscandOverlay";
import modalClose from "../../assets/modal-close.svg";

function ConfirmationModal({ onClose, isOpen, onLogin }) {
  escModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          onClick={onClose}
          style={{ backgroundImage: `url(${modalClose})` }}
        />
        <h2 className="form-modal__title">
          Registration successfully completed!
        </h2>
        <button type="button" className="form-modal__sign-in" onClick={onLogin}>
          Sign in
        </button>
      </div>
    </div>
  );
}
export default ConfirmationModal;
