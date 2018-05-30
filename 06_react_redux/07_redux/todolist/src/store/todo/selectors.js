export function getTodoList(reduxState) {
  return {
    todoList: reduxState.todos,
    fetching: reduxState.fetching,
  }
}
