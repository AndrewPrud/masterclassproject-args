import React, { useState } from 'react';
import {
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Box,
  FormControl,
  OutlinedInput,
  createTheme,
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

function LoginForm(props) {
  const [enteredUsername, setUsername] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#004cbb',
      },
      secondary: {
        main: '#ff7c00',
      },
    },
  });
  const handleLogin = (event) => {
    event.preventDefault();

    setUsernameError(false);
    setPasswordError(false);

    if (enteredUsername === '') {
      setUsernameError(true);
    }

    if (enteredPassword === '') {
      setPasswordError(true);
    }

    if (enteredUsername && enteredPassword) {
      const user = {
        username: enteredUsername,
        password: enteredPassword,
      };
      console.log(user);
      setUsername('');
      setPassword('');
    } else {
      handleOpen();
    }
  };

  const submitDisabled = !enteredUsername || !enteredPassword;
  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          height: 125,
          backgroundColor: '#004cbb',
          flexGrow: 1,
          textAlign: 'center',
          mb: 7,
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="common.white">
          {' '}
          <br /> LOG IN
        </Typography>{' '}
      </Box>
      <Box
        sx={{
          width: 270,
          height: 370,
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          alignItems: 'center',
          ml: '38%',
          mb: '24%',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        </Modal>
          </Fade>
            </Box>
              </Typography>
                All Input Are Not Filled.
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              </Typography>
                Bruh...😂
              >
                component="h2"
                variant="h6"
                id="transition-modal-title"
              <Typography
            <Box sx={style}>
          <Fade in={open}>
        >
          }}
            timeout: 500,
          BackdropProps={{
          BackdropComponent={Backdrop}
          closeAfterTransition
          onClose={handleClose}
          open={open}
          aria-describedby="transition-modal-description"
          aria-labelledby="transition-modal-title"
        <Modal
        <form noValidate autoComplete="off" onSubmit={handleLogin}>
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        <Grid
        >
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight="bold" textAlign="left">
              Username
            </Typography>
            <FormControl
              sx={{ boxShadow: 2, bgcolor: 'common.white', mt: 1, mb: 2 }}
            >
              <OutlinedInput
                value={enteredUsername}
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight="bold" textAlign="left">
              Password
            </Typography>
            <FormControl sx={{ boxShadow: 2, bgcolor: 'common.white', mt: 1 }}>
              <OutlinedInput
                value={enteredPassword}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    Remember Me
                  </Typography>
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <LoginButton
              disabled={submitDisabled}
              onClick={userHandler}
              username={enteredUsername}
              password={enteredPassword}
            >
              {' '}
              LOG IN{' '}
            </LoginButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default LoginForm;
