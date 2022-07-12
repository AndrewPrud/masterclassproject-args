import React from 'react';
import { Button } from '@mui/material';

function loginButton(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(props.username);
    console.log(props.password);
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
