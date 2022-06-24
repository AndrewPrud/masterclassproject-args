import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
<<<<<<< HEAD
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
=======
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
>>>>>>> dev

function WasteList(props) {
  const { waste, archiveWasteHandler, updateWasteHandler } = props;
  const [drop, setDrop] = useState('');
  let dropValue;
  const archiveWaste = (event) => {
    archiveWasteHandler(event.target.value);
  };

  const updateWaste = (event) => {
    updateWasteHandler(event.target.value);
  };
  const strAscending = [...waste].sort((a, b) => (a.name > b.name ? 1 : -1));
  const ownerAscending = [...waste].sort((a, b) =>
    a.owner > b.owner ? 1 : -1
  );
  let sentArray = [...waste];
  const dropHandler = (event) => {
    setDrop(event.target.value);
  };

  if (drop === 'Alphabetic') {
    sentArray = [...strAscending];
  } else if (drop === 'Owner') {
    sentArray = [...ownerAscending];
  }

  return (
    <Box sx={{ mt: 3 }}>
      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Sort"
        value={drop}
        onChange={dropHandler}
      >
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="Alphabetic">Alphabetic by Name</MenuItem>
        <MenuItem value="Owner">Alphabetic by Owner</MenuItem>
      </Select>
      <Grid container spacing={2}>
        {sentArray.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Typography component="p">{item.id}</Typography>
            <Typography component="p">{item.name}</Typography>
            <Typography component="p">Owner: {item.owner}</Typography>
            <Typography component="p">Price: {item.price}</Typography>
            <Typography component="p">City: {item.city}</Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>More Info</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="p">
                  Date accepted: {item.dateAccepted}
                </Typography>
                <Typography component="p">
                  Date Returned: {item.dateReturned}
                </Typography>
                <Typography component="p">
                  Postal code: {item.postalCode}
                </Typography>

              </AccordionDetails>
            </Accordion>
            <Button value={item.id} onClick={archiveWaste}>
              Delete
            </Button>
            <Button value={item.id} onClick={updateWaste}>
              Update
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WasteList;
WasteList.propTypes = {
  waste: PropTypes.array.isRequired,
  archiveWasteHandler: PropTypes.func.isRequired,
  updateWasteHandler: PropTypes.func.isRequired,
};
