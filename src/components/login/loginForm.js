import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Container,
  Grid,
  Typography,
  Box,
  OutlinedInput,
  createTheme,
  Modal,
  Fade,
  Backdrop,
} from '@mui/material';
import LoginButton from './loginButton';
import RemmemberMe from './remmemberMe';

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
  const [userError, setUserError] = useState(false);

  const [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userHandleOpen = () => setUserOpen(true);
  const userHandleClose = () => setUserOpen(false);

  const user = {
    username: enteredUsername,
    password: enteredPassword,
  };

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

  const validUsers = [
    {
      enteredUsername: 'asi',
      enteredPassword: 'pass',
    },
    {
      enteredUsername: 'bsi',
      enteredPassword: 'password',
    },
  ];

  const validUsernames = validUsers.map((a) => a.enteredUsername);
  const validPasswords = validUsers.map((a) => a.enteredPassword);
  const handleLogin = (event) => {
    event.preventDefault();

    setUsernameError(false);
    setPasswordError(false);

    if (
      (validUsernames.includes(enteredUsername) === false ||
        validPasswords.includes(enteredPassword) === false) &&
      enteredPassword !== '' &&
      enteredUsername !== ''
    ) {
      userHandleOpen();
    }
    if (
      ((validUsernames.includes(enteredUsername) === false ||
        validPasswords.includes(enteredPassword) === false) &&
        enteredPassword === '') ||
      enteredUsername === ''
    ) {
      handleOpen();
    }

    if (
      validUsernames.includes(enteredUsername) === true &&
      validPasswords.includes(enteredPassword) === true
    ) {
      user.username = enteredUsername;
      user.password = enteredPassword;

      console.log(user);
      setUsername('');
      setPassword('');
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
        <form noValidate autoComplete="off" onSubmit={handleLogin}>
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
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Bruh...😂
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  All Input Are Not Filled.
                </Typography>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={userOpen}
            onClose={userHandleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={userOpen}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Bruh...😂
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Invalid Username or Password
                </Typography>
              </Box>
            </Fade>
          </Modal>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
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
              <FormControl
                sx={{ boxShadow: 2, bgcolor: 'common.white', mt: 1 }}
              >
                <OutlinedInput
                  value={enteredPassword}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <RemmemberMe />
            </Grid>
            <Grid item xs={6}>
              <LoginButton
                disabled={submitDisabled}
                onSubmit={handleLogin}
                username={enteredUsername}
                password={enteredPassword}
              >
                {' '}
                LOG IN{' '}
              </LoginButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default LoginForm;
