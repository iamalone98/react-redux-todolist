import React from 'react'
import useAddForm from '../../hooks/useAddForm'

const AddForm = ({ toggleForm }) => {
  const { value, colors, currentColor, setCurrentColor, onChangeHandler, onSubmitHandler } = useAddForm();
  return (
    <div className="todo__sidebar_item_addmenu">
      <form onSubmit={onSubmitHandler}>
        <input value={value} onChange={onChangeHandler} type="text" placeholder="Название папки" />
        <ul className="todo__sidebar_item_addmenu-list">
          {colors && colors.map((item) => (
            <li key={item} className="todo__sidebar_item_addmenu-item">
              <i onClick={() => setCurrentColor(item)} className={`${item} ${currentColor === item ? 'active' : null}`}></i>
            </li>
          ))}
        </ul>
        <button>Добавить</button>
        <img
          onClick={toggleForm}
          className="todo__sidebar_item_addmenu_close"
          src="./closeicon.svg"
          alt="close"
        />
      </form>
    </div>
  )
}

export default AddForm
