import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ id, text, color }) => {
  return (
    <li className="todo__sidebar_item">
      <NavLink to={`/${id}`}>
        <i className={`todo__sidebar_item_icon ${color}`}></i>
        <p>{text}</p>
      </NavLink>
    </li>
  )
}

export default Item
