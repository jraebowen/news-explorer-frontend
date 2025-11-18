import "./ModalWithForm.css";

import escModalClose from "../../hooks/modalEscandOverlay";
import modalCloseIcon from "../../assets/modal-close.svg";

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
  escModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          style={{
            backgroundImage: `url(${modalCloseIcon})`,
          }}
          onClick={onClose}
        />
        <h2 className="form-modal__title">{title}</h2>
        <form className="form" onSubmit={onSubmit}>
          {children}
          <div className="form-modal__button-wrapper">
            <button
              type="submit"
              className="form-modal__button"
              disabled={!isValid}
            >
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
