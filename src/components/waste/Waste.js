import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddWaste from './waste-forms/AddWaste';
import UpdateWaste from './waste-forms/UpdateWaste';
import WasteList from './WasteList';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

function Waste() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');
  const [waste, setWaste] = useState([]);
  const [activeWaste, setActiveWaste] = useState([]);

  const archiveWasteHandler = async (itemId) => {
    const updatedItem = {
      id: itemId,
      active: false,
    };
    /* await updateItem(updatedItem);
    refreshItems(); */
  };

  const updateWasteHandler = async (
    wasteId,
    newName,
    newOwner,
    newPrice,
    newCity,
    newState,
    newPostalCode,
    newDateAccepted,
    newDateReturned
  ) => {
    const updatedItem = {
      id: wasteId,
      name: newName,
      owner: newOwner,
      price: newPrice,
      city: newCity,
      state: newState,
      postalCode: newPostalCode,
      dateAccepted: newDateAccepted,
      dateReturned: newDateReturned,
      active: true,
    };
    /* await updateItem(updatedItem);
    refreshItems();
    updateModalChange(); */
  };
}

export default Waste;
