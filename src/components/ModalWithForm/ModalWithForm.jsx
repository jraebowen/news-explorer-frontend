import "./ModalWithForm.css";

import useEscModalClose from "../../hooks/modalEscandOverlay";
import ModalCloseIcon from "../../assets/modal-close.svg?react";

function ModalWithForm({
  onClose,
  isOpen,
  title,
  children,
  buttonText,
  secondaryButton,
  onSubmit,
  isValid,
}) {
  useEscModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="modal__container">
        <button type="button" className="modal__close-button" onClick={onClose}>
          <ModalCloseIcon />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="form" onSubmit={onSubmit}>
          {children}
          <div className="modal__button-wrapper">
            <button type="submit" className="modal__button" disabled={!isValid}>
              {buttonText}
            </button>
          </div>
          {secondaryButton}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
