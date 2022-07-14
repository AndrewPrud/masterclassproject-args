import React, { useState, Fragment } from 'react';
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
  TextField,
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

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <fragment>
//       <Button onClick={handleOpen}>Open Error Modal By Your Self</Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">😂😂Imagine😂😂</h2>
//           <p id="child-modal-description">Invaild Email address</p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </fragment>
//   );
// }

function ForgotPassword() {
  const [isError, setIsError] = useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [enteredEmail, setEmail] = useState('');

  const emailHandler = (event) => {
    // const validRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|edu|org)$/i; old /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    event.preventDefault();

    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(enteredEmail)) {
      console.log(enteredEmail);
      setIsError(true);
    } else {
      setIsError(false);
      // alert('😂😂Imagine😂😂' + '\n \n' + 'Invaild Email address');
    }
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
              {isError ? (
                <OutlinedInput
                  value={enteredEmail}
                  onChange={(event) => setEmail(event.target.value)}
                />
              ) : (
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Invaild Email address."
                  value={enteredEmail}
                  onChange={(event) => setEmail(event.target.value)}
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={emailHandler}>Send email</Button>
          </Grid>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </>
  );
}

export default ForgotPassword;
