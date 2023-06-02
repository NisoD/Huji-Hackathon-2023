
import React, { useState, useEffect } from 'react';

const Calories = () => {
    const [calories, setCaloriesValue] = useState(0);
  
    const handleCaloriesSliderChange = (e) => {
      const value = parseInt(e.target.value);
      setCaloriesValue(value);
      localStorage.setItem("calories", value);
    };
  
    useEffect(() => {
      // On component mount, retrieve the time value from local storage (if available)
      const storedValue = localStorage.getItem("calories");
      if (storedValue) {
        setCaloriesValue(parseInt(storedValue));
      }
    }, []);
  
    return (
      <div className="slider-container">
        <h2>Calories limit: {calories} </h2>
        <input
          type="range"
          min={0}
          max={3000}
          value={calories}
          onChange={handleCaloriesSliderChange}
        />
      </div>
    );
  }
  
  export default Calories;



// import React, { useState } from 'react';
// import './MultipleChoiceSelector.css'; // Import CSS file for styling

// const MultipleChoiceSelector = () => {
//   const [options, setOptions] = useState([
//     'veg',
//     'without meat',
//     'kosher',
//     'non dairy',
//     'gluten free',
//     'non spicy'
//   ]);

//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [caloriesValue, setCaloriesValue] = useState(0);
//   const [timeValue, setTimeValue] = useState(0);

//   const handleOptionSelect = (option) => {
//     setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, option]);
//     setOptions((prevOptions) => prevOptions.filter((item) => item !== option));
//   };

//   const handleOptionDelete = (option) => {
//     setSelectedOptions((prevSelectedOptions) =>
//       prevSelectedOptions.filter((item) => item !== option)
//     );
//     setOptions((prevOptions) => [...prevOptions, option]);
//   };

//   const handleCaloriesSliderChange = (e) => {
//     setCaloriesValue(parseInt(e.target.value));
//   };

//   const handleTimeSliderChange = (e) => {
//     setTimeValue(parseInt(e.target.value));
//   };

//   return (
//     <div className="multiple-choice-selector-container">
//       <h1 className="header">Multiple Choice Selector</h1>
//       <div className="options-container">
//         <h2>Available Options:</h2>
//         <ul>
//           {options.map((option) => (
//             <li key={option}>
//               <button onClick={() => handleOptionSelect(option)}>{option}</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="selected-options-container">
//         <h2>Selected Options:</h2>
//         <ul>
//           {selectedOptions.map((option) => (
//             <li key={option}>
//               {option}{' '}
//               <button onClick={() => handleOptionDelete(option)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="sliders-container">
//         <div className="slider-container">
//           <h2>Calories: {caloriesValue}</h2>
//           <input
//             type="range"
//             min={0}
//             max={3500}
//             value={caloriesValue}
//             onChange={handleCaloriesSliderChange}
//           />
//         </div>
//         <div className="slider-container">
//           <h2>Time: {timeValue} minutes</h2>
//           <input
//             type="range"
//             min={5}
//             max={120}
//             value={timeValue}
//             onChange={handleTimeSliderChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultipleChoiceSelector;