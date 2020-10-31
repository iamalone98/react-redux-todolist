import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../redux/actions';
import useGetGoals from './useGetGoals';

const useAddForm = () => {
  const dispatch = useDispatch();
  const { maxId } = useGetGoals();
  const [colors] = useState(['gray', 'green', 'blue', 'pink', 'lightgreen', 'purple', 'black', 'orange']);
  const [currentColor, setCurrentColor] = useState('blue');
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value.trim()) return alert('Поле не может быть пустым!');
    dispatch(
      addGoal({
        id: maxId,
        color: currentColor,
        text: value,
        tasks: [],
      })
    )
  }
  return {
    value,
    colors,
    currentColor,
    setCurrentColor,
    onChangeHandler,
    onSubmitHandler,
  }
}

export default useAddForm
