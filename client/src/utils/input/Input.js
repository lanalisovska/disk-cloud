import PropTypes from "prop-types";
import React from 'react';



const Input = (props) => {
  return (
    <input onChange={(event)=> props.setValue(event.target.value)}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}/>
  );
};

export default Input;
  


Input.propTypes = {
  setValue: PropTypes.func.isRequared || PropTypes.any, 
  value: PropTypes.any,
  type: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired
    
}