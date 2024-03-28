const Currencies = () => {
    return (
<select name="currency" id="currency">
<option value="" selected disabled hidden>Currency</option>
        <option value="dollar">$ Dollar</option>
        <option value="pound">£ Pound</option>
        <option value="euro">€ Euro</option>
        <option value="ruppee">₹ Ruppee</option>
      </select>
    )
};

export default Currencies;