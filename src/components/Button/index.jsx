import React from 'react'
import './Button.scss'

const Button = ({ children }) => {
  return (
    <button className='button-component'> { children } </button>
  )
}

export default Button