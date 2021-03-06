import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BondCard from './BondCard';
import axios from 'axios';

function App() {

  // Need to hit API to get priceObj. 
  // Use whatever React method for state and whatever ajax method you wish.

  // URL: "https://bondcardapi-interviewcard.azurewebsites.net/api/BondCard?code=PsWBfs7/2h74WzScFAQPnWkmc7vCC5QjD/IBPVL6sp9M5ubquPtmBQ=="

  const uri = "https://bondcardapi-interviewcard.azurewebsites.net/api/BondCard?code=PsWBfs7/2h74WzScFAQPnWkmc7vCC5QjD/IBPVL6sp9M5ubquPtmBQ=="

  const [priceObj, setPriceObj] = useState({});

  axios.get(uri) // ping api
    .then(res => res.data) // map response to data provided by axios. any other code handling response logic goes here
    .then(data => {
      setPriceObj(data); // set component state to that data object
    })

  return (
    <div>
      {priceObj && <BondCard priceObj={priceObj} />}
    </div>
  );
}

export default App;
