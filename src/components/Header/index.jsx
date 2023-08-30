import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <HiOutlineArrowLeft className='arrow-icon'/>
      <h2>Reportar</h2>
    </header>
  )
}

export default Header