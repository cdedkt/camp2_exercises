import { createStore } from 'redux';

const initialState = {
  counterValue: 5,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "COUNTER_DOWN":
    console.log("COUNTER_DOWN");
      const newCounterValueDown = state.counterValue - 1;
      return {
        ...state,
        counterValue: newCounterValueDown
      }

    case "COUNTER_UP":
      console.log("COUNTER_UP");
      const newCounterValueUp = state.counterValue + 1;
      return {
        ...state,
        counterValue: newCounterValueUp
      }

    default:
      return state
  }
}

const store = createStore(counterReducer);

export default store;
