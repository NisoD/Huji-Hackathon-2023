import React, { useState, useEffect } from 'react';
import './MultipleChoiceSelector.css'; // Import CSS file for styling

const Restrictions = () => {
  const [options, setOptions] = useState([
    'veg',
    'without meat',
    'kosher',
    'non dairy',
    'gluten free',
    'non spicy'
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    // On component mount, retrieve the selected options from local storage (if available)
    const storedOptions = localStorage.getItem("restrictions");
    if (storedOptions) {
      setSelectedOptions(JSON.parse(storedOptions));
    }
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, option]);
    setOptions((prevOptions) => prevOptions.filter((item) => item !== option));
  };

  const handleOptionDelete = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((item) => item !== option)
    );
    setOptions((prevOptions) => [...prevOptions, option]);
    localStorage.removeItem("selectedOptions");
  };

  useEffect(() => {
    // Save the selected options to local storage whenever it changes
    localStorage.setItem("restrictions", JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  return (
    <div className="multiple-choice-selector-container">
      <div className="options-container">
        <h2>Available Options:</h2>
        <ul>
          {options.map((option) => (
            <li key={option}>
              <button onClick={() => handleOptionSelect(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-options-container">
        <h2>Selected Options:</h2>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option}>
              {option}{' '}
              <button onClick={() => handleOptionDelete(option)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Restrictions;