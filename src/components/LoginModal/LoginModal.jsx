import { useEffect } from "react";

import "./LoginModal.css";

import { useFormandValidation } from "../../hooks/useFormandValidation.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onRegister, handleLogin }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
    handleResetValues,
  } = useFormandValidation();

  //clear results when opening modal
  useEffect(() => {
    if (isOpen) {
      handleResetValues();
      setValues({ email: "", password: "", username: "" });
    }
  }, [isOpen, handleResetValues, setValues]);

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
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
          onChange={handleChange}
          value={values.email || ""}
          required
        />
        {errors.email && (
          <span className="form__input-error">Invalid email address</span>
        )}
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
          onChange={handleChange}
          value={values.password || ""}
          required
        />
        {errors.password && (
          <span className="form__input-error">Invalid password</span>
        )}
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;
