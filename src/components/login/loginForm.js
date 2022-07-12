import React, { useState } from 'react';
import {
  Button,
  Container,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Box,
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

  // const submitDisabled = !enteredUsername || !enteredPassword;
  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          height: 100,
          backgroundColor: 'primary.main',
          textAlign: 'center',
          mb: 5,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          LOG IN
        </Typography>{' '}
      </Box>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <form noValidate autoComplete="off" onSubmit={handleLogin}>
          <Grid item xs={6}>
            <TextField
              label="Username"
              value={enteredUsername}
              error={usernameError}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              value={enteredPassword}
              error={passwordError}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              LOGIN
            </Button>
          </Grid>
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
      </Grid>
    </Container>
  );
}

export default LoginForm;
