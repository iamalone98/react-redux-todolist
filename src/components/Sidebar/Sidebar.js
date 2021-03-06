import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useGetGoals from '../../hooks/useGetGoals'
import AddForm from './AddForm'
import Item from './Item'

const Sidebar = () => {
  const { goals } = useGetGoals();
  const [showForm, setShowForm] = useState(false);
  const toggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  }
  return (
    <div className="todo__sidebar">
      <ul className="todo__sidebar_list">
        <li className="todo__sidebar_item alltasks">
          <NavLink exact to='/'>
            <img src="./alltasks.svg" alt="icon" />
            <p>Все задачи</p>
          </NavLink>
        </li>
        {goals && goals.map((item) => (
          <Item key={item.id} {...item} />
        )
        )}
        <li className="todo__sidebar_item addtask">
          <a href='/' onClick={toggleForm}>
            <img src="./addtask.svg" alt="icon" />
            <p>Добавить папку</p>
          </a>
        </li>
      </ul>
      {showForm && <AddForm toggleForm={toggleForm} />}
    </div>
  )
}

export default Sidebar
