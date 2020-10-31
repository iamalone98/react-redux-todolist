import { useSelector } from "react-redux";

const useGetGoals = () => {
  const goals = useSelector((state) => state.appReducer.goals);
  let maxId = 0;

  goals.forEach(element => {
    maxId = Math.max(maxId, element.id);
  });

  return {
    goals,
    maxId: ++maxId,
  }
}

export default useGetGoals
