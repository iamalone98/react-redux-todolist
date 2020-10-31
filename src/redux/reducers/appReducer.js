const initialState = {
  goals: []
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LISTS':
      return { ...state, goals: state.goals.concat(action.payload) };
    case 'ADD_GOAL':
      return { ...state, goals: state.goals.concat(action.payload) };
    case 'ADD_TASK':
      let newItems = state.goals.map((item) => {
        if (item.id === action.payload.parentId) {
          item.tasks = item.tasks.concat(action.payload.task)
          return item;
        } else {
          return item;
        }
      })
      return { ...state, goals: newItems };
    case 'TOGGLE_COMPLETED':
      let newItemsCompleted = state.goals.map((item) => {
        if (item.id === action.payload.parentId) {
          for (let i = 0; i < item.tasks.length; i++) {
            if (item.tasks[i].id === action.payload.id) {
              item.tasks[i].completed = !item.tasks[i].completed;
            }
          }
          return item;
        } else {
          return item;
        }
      })
      return { ...state, goals: newItemsCompleted };
    case 'RENAME_TASK':
      let result = state.goals.map((item) => {
        if (item.id === action.payload.parentId) {
          item.text = action.payload.text
          return item;
        }
        return item;
      })
      return { ...state, goals: result };
    default:
      return state;
  }
}

export default sidebarReducer