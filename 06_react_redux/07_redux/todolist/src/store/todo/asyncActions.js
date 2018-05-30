import {reset, fetching } from "./actions";

export function resetAsync() {
  return dispatch => {
     dispatch(fetching());
     
     setTimeout(() =>
       dispatch(reset()),
       2000
     );
 }
}
