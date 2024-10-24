import React, { useState, useRef } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const inputRef = useRef(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!inputValue.trim()) {
      setError('Input cannot be empty');
      inputRef.current.focus();
      return;
    }
    
    console.log('Submitted Value:', inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Input:</label>
        <input
          id="input"
          type="text"
          value={inputValue} 
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default MyForm;
