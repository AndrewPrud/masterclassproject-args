import React from 'react';

import Box, {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

function LoginForm() {
  return (
    <Box>
      <TextField label="Username" />
      <TextField label="Password" />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
      </FormGroup>
    </Box>
  );
}

export default LoginForm;
