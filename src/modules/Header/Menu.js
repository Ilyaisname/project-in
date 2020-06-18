import React from 'react'
import './main.css'

function Menu() {
  return (
    <ul className="menu">
      <li className="menu__item"><a href="#">Главная</a></li>
      <li className="menu__item"><a href="#">Продукты</a></li>
      <li className="menu__item"><a href="#">О нас</a></li>
      <li className="menu__item"><a href="#">Контакты</a></li>
    </ul>
  )
}

export default Menu