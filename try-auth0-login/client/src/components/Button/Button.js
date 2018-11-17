import React from 'react'
import './button.css'

export default ({
  title = '',
  className = '',
  style = {},
  onClick = () => null,
}) => {
  return (
    <button
      className={className}
      style={{ ...styles.container, ...style}}
      onClick={onClick}>
      {title}
    </button>
  )
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 5,
  },
}