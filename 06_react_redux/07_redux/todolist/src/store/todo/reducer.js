import _ from 'underscore';

import todosImport from './dataTodos';

const initialState = {
  todos: sortTodoList(todosImport, "label", false),
  sortedBy: "label",
  sortedDesc: false,
  nextTodoId: 1000,
  fetching: false,
};

function checkTodo(todoList, todoId) {
  //console.log("checkTodo debut", todoId);
  const todoModified = todoList.map(todo => {
    if (todo.id === todoId) {
      return {
        ...todo,
        done: !todo.done
      }
    }
    return todo;
  });
  return todoModified;
}

function deleteTodo(todoList, todoId) {
  console.log("deleteTodo debut", todoId);
  const todoModified = _.reject(todoList, function(todo){ return todo.id === todoId; });
  //console.log("todoModified=", todoModified);
  return todoModified;
}

function sortTodoList(todoList, sortedBy, sortedDesc) {
  const todosSorted = _.sortBy(todoList, sortedBy);
  return sortedDesc ? todosSorted.reverse() : todosSorted;
}



function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "CHECK_TODO":
      console.log("CHECK_TODO", action.todoId);
      const newTodoList = checkTodo(state.todos, action.todoId);
      return {
        ...state,
        todos: newTodoList,
      }

    case "REMOVE_TODO":
      const newTodoListWithDelete = deleteTodo(state.todos, action.todoId);
      return {
        ...state,
        todos: newTodoListWithDelete,
      }

    case "ADD_TODO":
      const currentTodoId = state.nextTodoId;

      const newTodo = {};
      newTodo.id = currentTodoId.toString();
      newTodo.label = action.todoLabel;
      newTodo.done = false;

      const newTodoListAdd = [ ...state.todos, newTodo ];
      return {
        ...state,
        nextTodoId: currentTodoId + 1,
        todos: newTodoListAdd
      }

      case "ORDER_TODO_LIST":
        const newSortedBy = action.column;
        const newSortedDesc = (newSortedBy === state.sortedBy) && !state.sortedDesc;
        const newTodoListOrder = sortTodoList(state.todos, newSortedBy, newSortedDesc);
        return {
          ...state,
          sortedBy: newSortedBy,
          sortedDesc: newSortedDesc,
          todos: newTodoListOrder,
        }

      case "RESET_TODO_LIST":
      const newTodoListReset = [];
      return {
        ...state,
        todos: newTodoListReset,
        fetching: false,
      }

      case "FETCHING":
      return {
        ...state,
        fetching: true,
      }

    default:
      return state
  }
}


export default todoReducer;
