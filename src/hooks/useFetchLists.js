import { useDispatch } from 'react-redux';
import { fetchLists } from '../redux/actions';
const useFetchLists = () => {
  const dispatch = useDispatch();
  dispatch(fetchLists());
}

export default useFetchLists
