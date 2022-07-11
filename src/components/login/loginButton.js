import React from 'react';
import Button from '@mui/material/Button';

function loginButton(props) {
  const submitHandler = (event) => {
    console.log(props.username);
    console.log(props.password);
    event.preventDefault();
  };
  return (
    <div>
      <Button variant="contained" onSubmit={submitHandler}>
        Login
      </Button>
    </div>
  );
}

export default loginButton;
