import "./ModalWithForm.css";

import escModalClose from "../../hooks/modalEscandOverlay";

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
          onClick={onClose}
        />
        <h2 className="form-modal__title">{title}</h2>
        <form className="form" onSubmit={onSubmit}>
          {children}
        </form>
        <button
          type="submit"
          className="form-modal__button"
          disabled={!isValid}
        >
          {buttonText}
        </button>
        {secondaryButton}
      </div>
    </div>
  );
}

export default ModalWithForm;
