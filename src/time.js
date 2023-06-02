import { Slider } from 'antd';

import React, { useState, useEffect } from 'react';

const Time = () => {
    const [timeValue, setTimeValue] = useState(0);
  
    const handleTimeSliderChange = (e) => {
      const value = parseInt(e.target.value);
      setTimeValue(value);
      localStorage.setItem("time", value);
    };
  
    useEffect(() => {
      // On component mount, retrieve the time value from local storage (if available)
      const storedValue = localStorage.getItem("timeValue");
      if (storedValue) {
        setTimeValue(parseInt(storedValue));
      }
    }, []);
  
    return (

//         <div className="slider-container">
//     <h2>Time: {timeValue} minutes</h2>
//     <Slider
//       min={5}
//       max={120}
//       value={timeValue}
//       onChange={handleTimeSliderChange}
//     />
//   </div>

      <div className="slider-container">
        <h2>Time: {timeValue} minutes</h2>
        <input
          type="range"
          min={5}
          max={120}
          value={timeValue}
          onChange={handleTimeSliderChange}
        />
      </div>

    
    );
  }
  
  export default Time;

