import React from 'react'
import './input.css'

export const Input = ({
  title,
  type,
  name,
  value,
  placeholder,
  onChange,
  error = '',
  maxLength = '50',
}) => {
  const className = error.length > 0
    ? 'form-control is-invalid'
    : 'form-control'
  return (
    <div className="form-group">
      { title && <label style={styles.title}>{title}</label> }
      <input
        value={value}
        type={type}
        name={name}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div className="invalid-feedback">
        {error}
      </div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: 14,
    color: 'darkGray',
  },
  delete: {
    padding: 0,
    margin: 0,
    color: 'gray',
    fontSize: 10,
    border: 'none',
    outline: 0,
  },
}

export default Input;
