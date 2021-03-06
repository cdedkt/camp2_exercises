import {reset, fetching, load, mountError } from "./actions";

export function resetAsync() {
  return dispatch => {
     dispatch(fetching());

     setTimeout(() =>
       dispatch(reset()),
       2000
     );
 }
}


function fetchBrands() {
  return fetch(
    `https://obscure-gorge-44220.herokuapp.com/brands`,
    //`http://localhost:3001/brands`,
    {method: "GET"}
  )
  .then((response) => {
	  return response.json()
  });
}

export function loadAsync() {
  return dispatch => {
    dispatch(fetching());

    return fetchBrands()
  	.then(brands => {
  		const todoList = brands.map(brand => {
  			return {id: brand.id, label: brand.title, done: false}
  		});
  		dispatch(load(todoList));
  		}
  	)
    .catch(error => {
      dispatch(mountError(error.toString()));
    });
 }
}
