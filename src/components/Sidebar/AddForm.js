import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addGoal } from "./../../redux/actions";

const AddForm = ({ toggleForm, addGoal, goals }) => {
  const [colors] = useState(['gray', 'green', 'blue', 'pink', 'lightgreen', 'purple', 'black', 'orange']);
  const [currentColor, setCurrentColor] = useState('blue');
  const [value, setValue] = useState('');

  let maxId = 0;

  goals.forEach(element => {
    maxId = Math.max(maxId, element.id);
  });

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value.trim()) return alert('Поле не может быть пустым!');
    addGoal({
      id: ++maxId,
      color: currentColor,
      text: value,
      tasks: [],
    });
  }

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

const mapState = (state) => ({
  goals: state.appReducer.goals
})

const mapDis = (dispatch) => ({
  addGoal: (item) => dispatch(addGoal(item)),
})

export default connect(mapState, mapDis)(AddForm)
