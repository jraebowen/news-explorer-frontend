import { useEffect } from "react";

import "./RegisterModal.css";

import { useFormandValidation } from "../../hooks/useFormandValidation.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onLogin, handleRegistration }) {
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
    handleRegistration(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
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
          <span className="form__input-error">{errors.password}</span>
        )}
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
          onChange={handleChange}
          value={values.username || ""}
          required
        />
        {errors.username && (
          <span className="form__input-error">{errors.username}</span>
        )}
        {/* {errors.email && (
          <span className="form__input-error form__input-error_register-email">
            This email is not available
          </span>
        )} */}
      </fieldset>
    </ModalWithForm>
  );
}

export default RegisterModal;
