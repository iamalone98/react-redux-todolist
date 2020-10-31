import React from 'react'
import useTask from '../../hooks/useTask';
import AddTask from './AddTask';
import Item from './Item'

const Task = ({ id, items, text, color }) => {
  const {
    value: { newtask, retask },
    showForm,
    showRename,
    onRenameTaskHandler,
    onAddTaskHandler,
    onToggleHandler,
    onToggleRenameHandler,
    onChangeHandler } = useTask({ parentId: id, text });

  return (
    <div className="todo__task">
      {!showRename && (
        <h1 onClick={onToggleRenameHandler} className={`${color}`}>
          {text} <img src="./edit.svg" alt="edit" />
        </h1>
      )}
      {showRename && (
        <AddTask onAdd={onRenameTaskHandler} onChange={onChangeHandler} value={retask} name="retask" onToggleHandler={onToggleRenameHandler} text={'Сменить название'} />
      )}
      <hr />
      <div className="todo__tasks_list">
        {items && items.map((elem) => {
          return <Item key={elem.id} parentId={id} id={elem.id} {...elem} />
        })}
      </div>
      <div className="todo__tasks_addtask">
        {!showForm && (
          <div onClick={onToggleHandler} className="todo__tasks_addtask-btn">
            <img src="./addtask.svg" alt="addtask" />
            <p>Новая задача</p>
          </div>
        )}
        {showForm && (
          <AddTask text={'Добавить задачу'} name="newtask" onAdd={onAddTaskHandler} onToggleHandler={onToggleHandler} value={newtask} onChange={onChangeHandler} />
        )}
      </div>
    </div>
  )
}

export default Task;
