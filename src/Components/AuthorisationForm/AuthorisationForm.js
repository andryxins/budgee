import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './AuthorisationForm.module.css';
import AuthLoginField from '../AuthLoginField/AuthLoginField';
import AuthPasswordField from '../AuthPasswordField/AuthPasswordField';
import AuthButton from '../AuthButton/AuthButton';

const AuthorisationForm = ({ onlogIn }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onlogIn)} className={Styles.formContainer}>
      <div className={Styles.loginField}>
        <AuthLoginField register={register} />
      </div>

      <div className={Styles.passwordField}>
        <AuthPasswordField register={register} />
      </div>

      <AuthButton title="LogIn" />
    </form>
  );
};

export default AuthorisationForm;
