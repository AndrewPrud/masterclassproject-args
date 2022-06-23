import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UpdateWaste(props) {
  const { waste, onSubmit, handleClose } = props;

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, SetState] = useState('');
  const [postalCode, SetPostalCode] = useState('');
  const [dateAccepted, SetDateAccepted] = useState('');
  const [dateReturned, SetDateReturned] = useState('');

  useEffect(() => {
    initializeForm();
  }, []);

  const initializeForm = () => {
    if (waste.wasteName != null) {
      setName(waste.wasteName);
    }
    if (waste.wasteOwner != null) {
      setOwner(waste.wasteOwner);
    }
    if (waste.wastePrice != null) {
      const newPrice = waste.wastePrice.substring(0, 10);
      setPrice(newPrice);
    }
    if (waste.wasteCity != null) {
      setCity(waste.wasteCity);
    }
    if (waste.wasteState != null) {
      SetState(waste.wasteState);
    }
    if (waste.wastePostalCode != null) {
      SetPostalCode(waste.wastePostalCode);
    }
    if (waste.wasteDateAccepted != null) {
      SetDateAccepted(waste.wasteDateAccepted);
    }
    if (waste.wasteDateReturned != null) {
      SetDateReturned(waste.wasteDateReturned);
    }
  };

  const updateWasteHandler = (event) => {
    event.preventDefault();
    onSubmit(
      waste.id,
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

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ownerChangeHandler = (event) => {
    setOwner(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };
  const stateChangeHandler = (event) => {
    SetState(event.target.value);
  };
  const postalCodeChangeHandler = (event) => {
    SetPostalCode(event.target.value);
  };
  const dateAcceptedChangeHandler = (event) => {
    SetDateAccepted(event.target.value);
  };
  const dateReturnedChangeHandler = (event) => {
    SetDateReturned(event.target.value);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Update Waste</DialogTitle>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              onChange={nameChangeHandler}
              value={name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Owner"
              onChange={ownerChangeHandler}
              value={owner}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              onChange={priceChangeHandler}
              value={price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              onChange={cityChangeHandler}
              value={city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="State"
              onChange={stateChangeHandler}
              value={state}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="PostalCode"
              onChange={postalCodeChangeHandler}
              value={postalCode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Accepted"
              onChange={dateAcceptedChangeHandler}
              value={dateAccepted}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Returned"
              onChange={dateReturnedChangeHandler}
              value={dateReturned}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          onClick={updateWasteHandler}
          variant="contained"
        >
          Update Waste
        </Button>
      </Box>
    </Dialog>
  );
}

UpdateWaste.propTypes = {
  waste: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
