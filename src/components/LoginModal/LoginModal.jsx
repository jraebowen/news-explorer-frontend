import "./LoginModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onRegister }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      buttonText="Sign in"
      secondaryButton={
        <p className="form-modal__secondary-button_text">
          or{" "}
          <button
            type="button"
            className="form-modal__secondary-button"
            onClick={onRegister}
          >
            Sign up
          </button>
        </p>
      }
    >
      <fieldset className="form__fieldset">
        <label htmlFor="email-login-input" className="form__label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form__input"
          id="email-login-input"
          placeholder="Enter email"
          required
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label htmlFor="password-login-input" className="form__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form__input"
          id="password-login-input"
          placeholder="Enter password"
          required
        />
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;
