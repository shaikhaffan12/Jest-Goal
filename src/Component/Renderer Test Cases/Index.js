import React, { useState } from 'react'

export const Index = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };
  return (
    <div>
        <input 
        type="text" 
        placeholder='Enter User Name' 
        data-testid='userInput' 
        value={value}
        onChange = {handleInputChange}
        />
        <input type="text" placeholder='Password' data-testid='userPassword'/>
    </div>
  )
}
