import React from 'react'
import './main.css'
import Menu from './Menu'

export default function Header() {
  return(
    <div className="header">
      <h1 className="header__text">Шестерочка магазин</h1>
      <Menu />
    </div>
  )
}