/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '@mui/material/Button';

function LoginButton(props) {
  const submitHandler = (event) => {
    console.log(props.username);
    console.log(props.password);
    event.preventDefault();
  };
  return (
      <Button variant="contained" onSubmit={submitHandler}>
        Login
      </Button>
  );
}

export default LoginButton;
