import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currencies = () => {
    const { currency } = useContext(AppContext);
    const [name, setName] = useState('');
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
<select name="currency" id="currency" onChange={(event) => setName(event.target.value)}>
<option value="" selected disabled hidden>Currency</option>
        <option value="dollar">$ Dollar</option>
        <option value="pound">£ Pound</option>
        <option value="euro">€ Euro</option>
        <option value="ruppee">₹ Ruppee</option>
      </select>
    )
};

export default Currencies;