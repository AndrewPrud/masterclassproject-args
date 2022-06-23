import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function AddWaste(props) {
  const {
    name,
    owner,
    price,
    city,
    state,
    postalCode,
    dateAccepted,
    dateReturned,
    onNameChange,
    onOwnerChange,
    onPriceChange,
    onCityChange,
    onStateChange,
    onPostalCodeChange,
    onDateAcceptedChange,
    onDateReturnedChange,
    onSubmit,
  } = props;

  const onSubmitDisabled =
    !name ||
    !owner ||
    !price ||
    !city ||
    !state ||
    !postalCode ||
    !dateAccepted;

  const addWasteHandler = (event) => {
    event.preventDefault();
    onSubmit(
      name,
      owner,
      price,
      city,
      state,
      postalCode,
      dateAccepted,
      dateReturned
    );
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="Owner"
            value={owner}
            onChange={(event) => onOwnerChange(event.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="Price"
            value={price}
            type="number"
            onChange={(event) => onPriceChange(event.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="City"
            value={city}
            onChange={(event) => onCityChange(event.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="State"
            value={state}
            onChange={(event) => onStateChange(event.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="Postal Code"
            value={postalCode}
            onChange={(event) => onPostalCodeChange(event.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="Date Accepted"
            value={dateAccepted}
            onChange={(event) => onDateAcceptedChange(event.target.value)}
            type="date"
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            label="Date Returned"
            value={dateReturned}
            onChange={(event) => onDateReturnedChange(event.target.value)}
            type="date"
          />
        </Grid>
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addWasteHandler}
        variant="contained"
      >
        Add Waste
      </Button>
    </Box>
  );
}

AddWaste.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  dateAccepted: PropTypes.string.isRequired,
  dateReturned: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onOwnerChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onPostalCodeChange: PropTypes.func.isRequired,
  onDateAcceptedChange: PropTypes.func.isRequired,
  onDateReturnedChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddWaste;
