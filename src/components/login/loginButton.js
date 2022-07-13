import React from 'react';
import Button from '@mui/material/Button';
import './LoginButton.css';

function loginButton(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(props.username);
    console.log(props.password);
  };

  return (
    <button type="submit" className="button">
      Login
    </button>
  );
}

export default loginButton;
