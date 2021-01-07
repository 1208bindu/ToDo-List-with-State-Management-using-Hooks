import {ADD_TODO,DELETE_TODO} from '../actions/todoActions'
// Define an initial state value for the app
const initialState = {
    todos: []
  }
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function todoReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case ADD_TODO:
      {const id = state.todos.length+1;
       const todoItem = {value: action.payload.value, id, };

      return { ...state, todos: [...state.todos, todoItem] };
    }
      
    case DELETE_TODO:
      {
        const todo = state.todos.filter((todo) => todo.id !== action.payload.id);
        return { ...state, todos:[...todo] }
      }  
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
  export default todoReducer;