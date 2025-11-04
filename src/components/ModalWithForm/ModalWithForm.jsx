import "./ModalWithForm.css";

function ModalWithForm({
  onClose,
  isOpen,
  title,
  children,
  buttonText,
  secondaryButton,
}) {
  return (
    <div className={`modal ${isOpen && "modal__is-opened"}`}>
      <div className="form-modal__container">
        <button
          type="button"
          className="form-modal__close-button"
          onClick={onClose}
        />
        <h2 className="form-modal__title">{title}</h2>
        <form className="form">{children}</form>
        <button type="submit" className="form-modal__button">
          {buttonText}
        </button>
        {secondaryButton}
      </div>
    </div>
  );
}

export default ModalWithForm;
