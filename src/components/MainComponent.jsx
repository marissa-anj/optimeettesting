import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import GoogleMapComponent from './GoogleMapComponent';
import AddressInput from './AddressInput';

function ContinuousSlider() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Slider
        value={value}
        onChange={handleChange}
        min={1}
        max={100}
        sx={{ flex: 1 }}
      />

      <Typography variant="body1" sx={{ paddingLeft: 1, paddingRight: 1 }}>
        {value} km
      </Typography>
    </Box>
  );
}

function MainComponent() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  function handleAddressChange(newAddress, newCoordinates) {
    setAddress(newAddress);
    setCoordinates(newCoordinates);
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-10 border border-gray-300">
        <h1>Slider</h1>
        <ContinuousSlider />
      </div>
      <div className="w-1/2 p-10 border border-gray-300">
        <h1>Enter your location</h1>
        <AddressInput onAddressChange={handleAddressChange} />
      </div>
      <div className="w-1/2 p-10 border border-gray-300">
        <h1>Place Google Maps API here</h1>
        <GoogleMapComponent address={address} coordinates={coordinates} />
      </div>
    </div>
  );
}

export default MainComponent;
