export const setLists = (items) => ({
  type: "SET_LISTS",
  payload: items
});

export const addGoal = (item) => ({
  type: "ADD_GOAL",
  payload: item
});

export const addTask = (item) => ({
  type: "ADD_TASK",
  payload: item
});

export const toggleCompleted = (id) => ({
  type: "TOGGLE_COMPLETED",
  payload: id
});

export const renameTask = (item) => ({
  type: "RENAME_TASK",
  payload: item
});

export const fetchLists = () => (dispatch) => {
  fetch('http://localhost:3000/db.json')
    .then(res => res.json())
    .then(data => dispatch(setLists(data.goals)))
}