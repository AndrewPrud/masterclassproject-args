import React, { useState } from 'react';
import {
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

function RemmemberMe(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked size="small" />}
        checked={checked}
        onChange={handleChange}
        label={
          <Typography variant="body1" fontWeight="bold" textAlign="left">
            Remember Me
          </Typography>
        }
      />
    </FormGroup>
  );
}

export default RemmemberMe;
