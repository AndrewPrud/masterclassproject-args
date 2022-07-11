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
} from '@mui/material';

function LoginForm(props) {
  const [enteredUsername, setUsername] = useState('');
  const [enteredPassword, setPassword] = useState('');
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
  const userHandler = (event) => {
    event.preventDefault();
    const user = {
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log(user);
    setUsername('');
    setPassword('');
  };

  const submitDisabled = !enteredUsername || !enteredPassword;
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
        <Grid item xs={6}>
          <TextField
            label="Username"
            value={enteredUsername}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Password"
            value={enteredPassword}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Button
            disabled={submitDisabled}
            variant="contained"
            onClick={userHandler}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginForm;
