import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddWaste from './waste-forms/AddWaste';
import UpdateWaste from './waste-forms/UpdateWaste';
import WasteList from './WasteList';
import { getWasteList, addWaste, updateWaste } from '../../services/services';
import './darkMode.css';

function Waste() {
  const [wasteToUpdate, setWasteToUpdate] = useState('');
  const [updateWasteModal, setUpdateWasteModal] = useState(false);
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState(Date());
  const [dateReturned, setDateReturned] = useState(Date());
  const [waste, setWaste] = useState([]);
  const [activeWaste, setActiveWaste] = useState([]);

  useEffect(() => {
    refreshItems();
  }, []);

  const archiveWasteHandler = async (itemId) => {
    const updatedItem = {
      id: itemId,
      active: false,
    };
    await updateWaste(updatedItem);
    refreshItems();
  };

  const refreshItems = async () => {
    const bruh = await getWasteList();
    setWaste(bruh);
    setActiveWaste(bruh.filter((wasteItem) => true));
  };

  const onAddWasteFormSubmit = async (
    enteredName,
    enteredOwner,
    enteredPrice,
    enteredCity,
    enteredState,
    enteredPostalCode,
    enteredDateAccepted,
    enteredDateReturned
  ) => {
    const newWaste = {
      name: enteredName,
      owner: enteredOwner,
      price: enteredPrice,
      city: enteredCity,
      state: enteredState,
      postalCode: enteredPostalCode,
      dateAccepted: new Date(enteredDateAccepted),
      dateReturned: new Date(enteredDateReturned),
      active: true,
    };

    await addWaste(newWaste);
    refreshItems();
    setName('');
    setOwner('');
    setPrice('');
    setCity('');
    setState('');
    setPostalCode('');
    setDateAccepted('');
    setDateReturned('');
  };

  const updateModalChange = (wasteId) => {
    if (updateWasteModal === true) {
      setUpdateWasteModal(false);
    } else {
      const wasteIndex = waste.findIndex(
        (wasteItem) => wasteItem.id === wasteId
      );
      setWasteToUpdate(waste[wasteIndex]);
      setUpdateWasteModal(true);
    }
  };

  const updateWasteHandler = async (
    wasteId,
    Name,
    Owner,
    Price,
    City,
    State,
    PostalCode,
    DateAccepted,
    DateReturned
  ) => {
    const updatedItem = {
      id: wasteId,
      name: Name,
      owner: Owner,
      price: Price,
      city: City,
      state: State,
      postalCode: PostalCode,
      dateAccepted: DateAccepted,
      dateReturned: DateReturned,
      active: true,
    };
    await updateWaste(updatedItem);
    refreshItems();
    updateModalChange();
  };

  return (
    <Container className="nav" maxWidth="sm">
      {updateWasteModal && (
        <UpdateWaste
          waste={wasteToUpdate}
          onSubmit={updateWasteHandler}
          handleClose={updateModalChange}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Waste
        </Typography>
        <AddWaste
          name={name}
          owner={owner}
          price={price}
          city={city}
          state={state}
          postalCode={postalCode}
          dateAccepted={dateAccepted}
          dateReturned={dateReturned}
          onNameChange={setName}
          onOwnerChange={setOwner}
          onPriceChange={setPrice}
          onCityChange={setCity}
          onStateChange={setState}
          onPostalCodeChange={setPostalCode}
          onDateAcceptedChange={setDateAccepted}
          onDateReturnedChange={setDateReturned}
          onSubmit={onAddWasteFormSubmit}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <WasteList
          waste={activeWaste}
          archiveWasteHandler={archiveWasteHandler}
          updateWasteHandler={updateModalChange}
        />
      </Box>
    </Container>
  );
}

export default Waste;
