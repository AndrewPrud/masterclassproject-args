import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  OutlinedInput,
  Modal,
  Fade,
  Backdrop,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const stylee = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ForgotPassword() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [enteredEmail, setEmail] = useState('');
  // second modal for error
  const [openn, setOpenn] = useState(false);
  const handleOpenn = () => setOpen(true);
  const handleClosee = () => setOpen(false);

  const emailHandler = (event) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    event.preventDefault();

    if (enteredEmail === '') {
      handleOpenn();
    } else {
      console.log(enteredEmail);
    }

    // if (enteredEmail.value.match(validRegex)) {
    //   console.log('Correct stuff');
    // } else {
    //   handleOpenn();
    // }
  };

  return (
    <>
      <Button onClick={handleOpen}>Forgot Password?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Forgot Password?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please enter your email for password recovery:
          </Typography>
          <Grid item xs={6}>
            <FormControl
              sx={{ boxShadow: 2, bgcolor: 'common.white', mt: 1, mb: 2 }}
            >
              <OutlinedInput
                value={enteredEmail}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={emailHandler}>Send email</Button>
          </Grid>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openn}
        onClose={handleClosee}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openn}>
          <Box sx={stylee}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              😂😂😂😂😂
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              --
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default ForgotPassword;
