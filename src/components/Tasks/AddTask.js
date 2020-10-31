import React from 'react'

const AddTask = ({ name, text, value, onChange, onAdd, onToggleHandler }) => {
  return (
    <div className="todo__tasks_addtask-form">
      <input name={name} value={value} onChange={onChange} type="text" placeholder="Текст задачи" />
      <button onClick={onAdd} className="todo__tasks_addtask-form-add">
        {text}
      </button>
      <button onClick={onToggleHandler} className="todo__tasks_addtask-form-close">
        Отмена
    </button>
    </div>
  )
}

export default AddTask
