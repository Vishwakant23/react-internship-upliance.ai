import React, { useState } from 'react';


const BackgroundChanger = () => {
  // State for count and background color level
  const [count, setCount] = useState(0);
  const [backgroundColorLevel, setBackgroundColorLevel] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    // Increase background color level linearly
    setBackgroundColorLevel(prevLevel => prevLevel + 10);
  };

  // Function to decrement count
  const decrementCount = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      // Decrease background color level linearly
      setBackgroundColorLevel(prevLevel => prevLevel - 10);
    }
  };

  // Function to reset count and background color level
  const resetCount = () => {
    setCount(0);
    setBackgroundColorLevel(0);
  };

  return (
    <div className='box1'>
      <div style={{ height: `${backgroundColorLevel}px`, backgroundColor: 'blue', transition: 'height 0.5s'  }}>
        {/* Background color level */}
      </div>
      <div className='counter'>
        {/* Display count */}
        Count: {count}
      </div>
      <div className='buttons'>
        <button style={{backgroundColor: 'green', border: 'none' }} onClick={incrementCount}>Increment</button>
        <button style={{backgroundColor: 'red', border: 'none' }} onClick={resetCount}>Reset</button>
        <button style={{backgroundColor: 'blue', border: 'none' }} onClick={decrementCount}>Decrement</button>
      </div>
      
    </div>
  );
};




export default BackgroundChanger;
