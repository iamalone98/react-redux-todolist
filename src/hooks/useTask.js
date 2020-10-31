import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { renameTask } from '../redux/actions';
import { addTask } from '../redux/actions';
import useGetGoals from './useGetGoals';

const useTask = ({ parentId, text = '' }) => {
  const dispatch = useDispatch();
  const { maxId } = useGetGoals();
  const [showForm, setShowForm] = useState(false);
  const [showRename, setShowRename] = useState(false);
  const [value, setValue] = useState({
    newtask: '',
    retask: text,
  });

  const onToggleHandler = () => {
    setShowForm(!showForm);
  }

  const onToggleRenameHandler = () => {
    setShowRename(!showRename);
  }

  const onChangeHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  const onAddTaskHandler = () => {
    if (!value.newtask.trim()) return alert('Поле не может быть пустым!');
    dispatch(
      addTask({
        parentId,
        task: {
          id: maxId,
          text: value.newtask,
          completed: false,
        }
      })
    )
    setValue({ newtask: '' });
  }

  const onRenameTaskHandler = () => {
    if (!value.retask.trim()) return alert('Поле не может быть пустым!');
    dispatch(
      renameTask({
        parentId,
        text: value.retask
      })
    )
    onToggleRenameHandler()
  }

  return {
    showForm,
    onToggleHandler,
    onToggleRenameHandler,
    onChangeHandler,
    showRename,
    setShowRename,
    value,
    onRenameTaskHandler,
    onAddTaskHandler,
  }
}

export default useTask
