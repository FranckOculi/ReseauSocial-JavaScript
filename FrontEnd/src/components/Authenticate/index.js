import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Authenticate = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === 'register') {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === 'login') {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };
  console.log(signInModal);
  return (
    <div className='connection-form'>
      <div className='connection-form-btn'>
        <button
          onClick={handleModals}
          id='register'
          className={signUpModal ? 'active' : null}
        >
          S'inscrire
        </button>
        <button
          onClick={handleModals}
          id='login'
          className={signInModal ? 'active' : null}
        >
          Se connecter
        </button>
      </div>

      {signUpModal && <SignUpForm />}
      {signInModal && <SignInForm />}
    </div>
  );
};

export default Authenticate;
