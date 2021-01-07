export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export  function addTodo(itemValue)
{
  return{
    type:ADD_TODO,
    payload: { value: itemValue },
  }
}
export  function deleteTodo(selectedItemId)
{
  console.log(selectedItemId)
  return{
    type:DELETE_TODO,
    payload: { id: selectedItemId },
  }
}

