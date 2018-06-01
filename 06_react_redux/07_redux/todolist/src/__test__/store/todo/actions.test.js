import {add, check} from "../../../store/todo/actions";

import todosImport from './dataTodos';

test("ACTION add", () => {
  const _todoLabel = "new label";
  expect(add(_todoLabel))
    .toEqual({type: "ADD_TODO", todoLabel: _todoLabel});
})

test("ACTION check", () => {
  const _todoId = 1;
  expect(check(_todoId))
    .toEqual({type: "CHECK_TODO", todoId: _todoId});
})
