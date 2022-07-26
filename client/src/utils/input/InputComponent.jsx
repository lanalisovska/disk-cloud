import React from 'react';
import s from './Input.module.css'
import PropTypes from "prop-types";
import Input from '@mui/material/Input';



const InputComponent = ({placeholder, type, value, setValue}) => {

  return (
    <Input onChange={(event)=> setValue(event)}
      value={value}
      type={type}
      className={s.input}
      placeholder={placeholder}
      autoFocus
      required
      border='none'
      fullWidth />
  )
}


InputComponent.propTypes = {
  setValue: PropTypes.func.isRequared || PropTypes.any, 
  value: PropTypes.any,
  type: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired
  
}

export default InputComponent

