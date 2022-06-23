import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './UpdateWaste.css';

// CLick Edit Button will be passsed ->
// Pop Up Modal
// Same UI as AddWaste
// Input Click Done
// Store to new List
// Change Previous Data

// delete button

function UpdateWaste(props) {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */} // get from
      aniruddh by props
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="style">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <TextField label="Name" />
            </Grid>
            <Grid xs={12}>
              <TextField label="Owner" />
            </Grid>
            <Grid xs={12}>
              <TextField label="Price" />
            </Grid>
            <Grid xs={12}>
              <TextField label="City" />
            </Grid>
            <Grid xs={12}>
              <TextField label="State" />
            </Grid>
            <Grid xs={12}>
              <TextField label="Postal Code" />
            </Grid>
            <Grid xs={12}>
              <TextField label="Date Accepted" />
            </Grid>
            <Grid xs={12}>
              <TextField label="Date Returned" />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <footer>
        <Button onClose={handleClose}>Close</Button>
      </footer>
      // store the new data here or send right away to aniruddh
    </div>
  );
}

export default UpdateWaste;
