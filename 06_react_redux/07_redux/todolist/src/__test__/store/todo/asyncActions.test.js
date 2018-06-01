import {loadAsync} from "../../../store/todo/asyncActions";
import {load, fetching} from "../../../store/todo/actions";

import todosImport from './dataTodos';


let originalFetch = null;

beforeEach(() => {
  originalFetch = window.fetch;
  window.fetch = require('jest-fetch-mock');
})

afterEach(() => { window.fetch = originalFetch; })

test('ASYNC_ACTIONS load todos', () => {
  const mockDispatcher = jest.fn();
  window.fetch.mockResponseOnce(JSON.stringify([
    {
      "id": "cbe1c32e-faa9-4911-ad8e-4422f2b627c9",
      "title": "8C+"
    },
    {
      "id": "e9b08852-1132-4e92-b062-866d1ce44833",
      "title": "ABUS"
    }]));

  const expectedFetchingAction = fetching();
  const expectedLoadParams = [
      {id: "cbe1c32e-faa9-4911-ad8e-4422f2b627c9", label: "8C+", done: false},
      {id: "e9b08852-1132-4e92-b062-866d1ce44833", label: "ABUS", done: false}
    ];
  const expectedLoadAction = load(expectedLoadParams);

  const thunk = loadAsync();

  return thunk(mockDispatcher)
    .then((dispatch) => {
      expect(mockDispatcher.mock.calls[0])
        .toEqual([expectedFetchingAction]);
      expect(mockDispatcher.mock.calls[1])
        .toEqual([expectedLoadAction]);
    });
});
