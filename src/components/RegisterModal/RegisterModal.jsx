import "./RegisterModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onLogin }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      buttonText="Sign up"
      secondaryButton={
        <p className="form-modal__secondary-button_text">
          or{" "}
          <button
            type="button"
            className="form-modal__secondary-button"
            onClick={onLogin}
          >
            Sign in
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
      <fieldset className="form__fieldset">
        <label htmlFor="username-login-input" className="form__label">
          Username
        </label>
        <input
          type="username"
          name="username"
          className="form__input"
          id="username-login-input"
          placeholder="Enter your username"
          required
        />
      </fieldset>
    </ModalWithForm>
  );
}

export default RegisterModal;
