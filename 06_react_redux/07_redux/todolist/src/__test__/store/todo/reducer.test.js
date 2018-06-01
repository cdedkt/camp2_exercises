import reducer from "../../../store/todo/reducer";
import {add, check} from "../../../store/todo/actions";

import todosImport from './dataTodos';


test('REDUCER Add todo', () => {
  const initialState = {
    todos: todosImport,
    nextTodoId: 1000,
  };
  const newTodoLabel = "new label";
  const newTodo = {id: initialState.nextTodoId.toString(), label: newTodoLabel, done: false};
  const action = add(newTodoLabel);
  const expectedState = {
    ...initialState,
    todos: [newTodo, ...initialState.todos],
    nextTodoId: initialState.nextTodoId + 1,
  };

  expect(reducer(initialState, action))
    .toEqual(expectedState);
});



test('REDUCER Check todo already done', () => {
  const initialState = {
    todos: [
      { "id": "1", "label": "Développement reactJs", "done": true },
      { "id": "2", "label": "Révision fonction callback", "done": false },
    ]
  };
  const action = check(initialState.todos[0].id);
  const expectedState = {
    ...initialState,
    todos: [{...initialState.todos[0], done: !(initialState.todos[0].done)}, initialState.todos[1]],
  };

  expect(reducer(initialState, action))
    .toEqual(expectedState);
});


test('REDUCER Check todo not done', () => {
  const initialState = {
    todos: [
      { "id": "1", "label": "Développement reactJs", "done": true },
      { "id": "2", "label": "Révision fonction callback", "done": false },
    ]
  };
  const action = check(initialState.todos[1].id);
  const expectedState = {
    ...initialState,
    todos: [initialState.todos[0], {...initialState.todos[1], done: !(initialState.todos[1].done)}],
  };

  expect(reducer(initialState, action))
    .toEqual(expectedState);
});
