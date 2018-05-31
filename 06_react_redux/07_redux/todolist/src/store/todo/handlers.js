import { add, check, remove, order, mountError } from "./actions";
import { resetAsync, loadAsync } from "./asyncActions";

export function tableTodosHandler(dispatch) {
  return {
    addTodo: (todoLabel)  => dispatch(add(todoLabel)),
    orderTodoList: (column)  => dispatch(order(column)),
    resetTodoList: () => dispatch(resetAsync()),
	  loadTodoList: () => dispatch(loadAsync()),
    mountError: (error) => dispatch(mountError()),
  }
}

export function checkRemoveHandler(dispatch) {
  return {
    removeTodo: (todoId)  => dispatch(remove(todoId)),
    checkTodo: (todoId)  => dispatch(check(todoId)),
  }
}
