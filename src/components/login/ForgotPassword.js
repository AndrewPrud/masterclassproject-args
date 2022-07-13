import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  OutlinedInput,
  Modal,
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

function ForgotPassword() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [enteredEmail, setEmail] = useState('');
  const emailHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail);
    handleClose();
  };

  return (
    <div>
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
    </div>
  );
}

export default ForgotPassword;
