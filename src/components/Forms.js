import React, { useState } from 'react';
import CloseSm from './icons/CloseSm';
import '../styles/forms.css';
import Allow from './Allow';

const Forms = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayedComponents, setDisplayedComponents] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    const newDisplayedComponents = [...displayedComponents, inputValue];
    setDisplayedComponents(newDisplayedComponents);

    setInputValue('');
  };

  const handleRemoveComponent = (index) => {
    const updatedComponents = [...displayedComponents];
    updatedComponents.splice(index, 1);
    setDisplayedComponents(updatedComponents);
  };

  return (
    <div>
      <div className="text">
          Add members
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter email address"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">ADD</button>
      </form>

      {displayedComponents.map((value, index) => (
        <div key={index} className="members">
          <div className="close-mini" onClick={() => handleRemoveComponent(index)}>
            <CloseSm />
          </div>
          <p>{value}</p>
        </div>
      ))}
      <Allow />
    </div>
  );
};

export default Forms;
