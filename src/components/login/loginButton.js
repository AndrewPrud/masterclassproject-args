/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '@mui/material/Button';
import './LoginButton.css';

function LoginButton(props) {
  const submitHandler = (event) => {
    console.log(props.username);
    console.log(props.password);
    event.preventDefault();
  };
  return (
    <button type="submit" className="button" onClick={submitHandler} >
      Login
    </button>
  );
}

export default LoginButton;
