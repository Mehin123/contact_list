import React, { useState } from 'react';

export default function useInputState(initial) {
  const [state, setState] = useState(initial);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
 
  return [state, handleChange];
}