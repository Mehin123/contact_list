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
  const handleChangeNumber = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: parseInt((value),10),
    });
  };
  const reset = ()=>{
    setState('')
  }
  return [state, handleChange, handleChangeNumber,reset];
}
