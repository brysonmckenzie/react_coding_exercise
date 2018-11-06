import React from 'react';

const Limit = (props) => {
  return (
    <input 
    onChange={props.updateLimit}
    type="range" 
    min="1" 
    max="50" 
    defaultValue={props.limit} />
  )
}
export default Limit 