/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from './errorModelTest';

function LoginButton(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (props.username && props.password) {
      console.log(props.username);
      console.log(props.password);
    } else {
      handleOpen();
    }
  };
  return (
    <div>
      <Button variant="contained" onSubmit={submitHandler}>
        Login
      </Button>
      <Modal
        handleOpener={{ handleOpen }}
        handleCloser={{ handleClose }}
        isOpen={{ open }}
      />
    </div>
  );
}

export default LoginButton;
