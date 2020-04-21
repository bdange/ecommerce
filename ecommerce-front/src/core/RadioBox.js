import React, { useState } from 'react';

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    //handleFilters comes as props from Shop.js
    handleFilters(event.target.value);
    // update our state
    setValue(event.target.value);
  };

  return prices.map((p, i) => (
    // p: price - i: index
    <div key={i}>
      <input
        onChange={handleChange}
        value={`${p._id}`}
        name={p}
        type='radio'
        className='mr-2 ml-4'
      />
      <label className='form-check-label'>{p.name}</label>
    </div>
  ));
};

export default RadioBox;
