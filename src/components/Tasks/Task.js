import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTask, renameTask } from '../../redux/actions/appActions';
import AddTask from './AddTask';
import Item from './Item'

const Task = ({ id, addTask, renameTask, items, text, color }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showRename, setShowRename] = useState(false);
  const [value, setValue] = useState('');
  const [rename, setRename] = useState(text);

  let maxId = 0;

  items.forEach(element => {
    maxId = Math.max(maxId, element.id);
  });

  const onToggleHandler = () => {
    setShowAdd(!showAdd);
  }

  const onToggleRenameHandler = () => {
    setShowRename(!showRename);
  }

  const onChangeRenameHandler = (e) => {
    setRename(e.target.value);
  }

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  }

  const onAddTaskHandler = () => {
    if (!value.trim()) return alert('Поле не может быть пустым!');
    addTask({
      parentId: id,
      task: {
        id: ++maxId,
        text: value,
        completed: false,
      }
    });
    setValue('');
  }

  const onRenameTaskHandler = () => {
    if (!rename.trim()) return alert('Поле не может быть пустым!');
    renameTask({
      id,
      text: rename
    })
    onToggleRenameHandler()
  }

  return (
    <div className="todo__task">
      {!showRename && (
        <h1 onClick={onToggleRenameHandler} className={`${color}`}>
          {text} <img src="./edit.svg" alt="edit" />
        </h1>
      )}
      {showRename && (
        <AddTask onAdd={onRenameTaskHandler} onChange={onChangeRenameHandler} value={rename} onToggleHandler={onToggleRenameHandler} text={'Сменить название'} />
      )}
      <hr />
      <div className="todo__tasks_list">
        {items && items.map((elem) => {
          return <Item key={elem.id} parentId={id} id={elem.id} {...elem} />
        })}
      </div>
      <div className="todo__tasks_addtask">
        {!showAdd && (
          <div onClick={onToggleHandler} className="todo__tasks_addtask-btn">
            <img src="./addtask.svg" alt="addtask" />
            <p>Новая задача</p>
          </div>
        )}
        {showAdd && (
          <AddTask text={'Добавить задачу'} onAdd={onAddTaskHandler} onToggleHandler={onToggleHandler} value={value} onChange={onChangeHandler} />
        )}
      </div>
    </div>
  )
}

const mapDis = (dispatch) => ({
  addTask: (item) => dispatch(addTask(item)),
  renameTask: (item) => dispatch(renameTask(item))
})

export default connect(null, mapDis)(Task);
