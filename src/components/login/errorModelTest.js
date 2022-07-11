import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

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

export default function ErrorModelTest() {
  // for inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameError(false);
    setPasswordError(false);

    if (username === '') {
      setUsernameError(true);
    }

    if (password === '') {
      setPasswordError(true);
    }

    if (username && password) {
      console.log(username, password);
    } else {
      handleOpen();
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <TextField
            onChange={(event) => setUsername(event.target.value)}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            error={usernameError}
          />

          <TextField
            onChange={(event) => setPassword(event.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            error={passwordError}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
          >
            Submit
          </Button>
        </Stack>
      </form>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Bruh...😂
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              All Input Are Not Filled.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
