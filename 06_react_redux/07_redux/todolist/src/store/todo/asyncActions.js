import {reset, fetching, load } from "./actions";

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
    //{method: "GET",}
		{mode: "no-cors"}
  )
  .then((response) => {
	  console.log("response=", response);
	  console.log("response.json=", response.json());
	  return response.json()
  });
}

export function loadAsync() {
  return dispatch => {
    return fetchBrands()
	.then(brands => {
		console.log("brands=", brands);
		const todoList = brands.map(brand => {
			return {id: brand.id, label: brand.title, done: false}
		});
		dispatch(load(todoList));
		}
	);		    
 }
}