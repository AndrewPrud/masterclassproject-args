import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function WasteList(props){
  const { waste, archiveWasteHandler, updateWasteHandler } = props;

  const archiveWaste = (event) => {
    archiveWasteHandler(event.target.value);
  };

  const updateWaste = (event) => {
    updateWasteHandler(event.target.value);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {waste.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Typography component="p">{item.id}</Typography>
            <Typography component="p">{item.name}</Typography>
            <Typography component="p">Owner: {item.owner}</Typography>
            <Typography component="p">Price: {item.price}</Typography>
            <Typography component="p">City: {item.city}</Typography>
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
