import React from 'react'

const Input = (props) => {
  return (
    <div>

    
    <label>
      {props.label}
      <br />
      <input
      className="form-control epm-input"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.handleChange}
    />
    </label>
    </div>
  )
}

export default Input
