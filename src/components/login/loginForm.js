import React, { useState } from 'react';
import {
  Button,
  Container,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
} from '@mui/material';

function LoginForm(props) {
  const [enteredUsername, setUsername] = useState('');
  const [enteredPassword, setPassword] = useState('');

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
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <h1>LOGIN</h1>
        </Grid>
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
          <Button onClick={userHandler}>Submit</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginForm;
