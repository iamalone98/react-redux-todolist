import React from 'react'
import { connect } from 'react-redux'
import { toggleCompleted } from '../../redux/actions'

const Item = ({ text, id, parentId, completed, toggleCompleted }) => {
  const onToggleHandler = () => {
    toggleCompleted({ parentId, id })
  }
  return (
    <div className="todo__tasks_item">
      <input
        id={`todo__tasks_item-input-${parentId}-${id}`}
        onClick={onToggleHandler}
        className="todo__tasks_item-input"
        type="checkbox"
        defaultChecked={completed}
      />
      <label
        className="todo__tasks_item-label checked"
        htmlFor={`todo__tasks_item-input-${parentId}-${id}`}
      ></label>
      <p>{text}</p>
    </div>
  )
}

const mapDis = (dispatch) => ({
  toggleCompleted: (item) => dispatch(toggleCompleted(item))
})

export default connect(null, mapDis)(Item)
