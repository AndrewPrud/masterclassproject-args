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
    setUsername('');
    setPassword('');
    console.log(user);
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
            <Button disabled={submitDisabled} onClick={userHandler}>
              {' '}
              LOG IN{' '}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default LoginForm;
