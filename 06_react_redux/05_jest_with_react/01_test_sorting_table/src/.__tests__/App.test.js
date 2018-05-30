// App.test.js  avec Snapshot
import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';

const products =
[
  { "decathlon_id": 10, "title": "Title 10", "price": 9.99 },
  { "decathlon_id": 20, "title": "Title 20", "price": 9.99 },
  { "decathlon_id": 30, "title": "Title 30", "price": 54.99 }
]

test('App should contain a table', () => {
  const component = renderer.create(
    <App lines={products} />
  );
  let tree = component.toJSON();
  //console.log("tree=", tree);
  expect(tree).toMatchSnapshot();
});

test('App should be sortable by title', () => {
  const component = renderer.create(
    <App lines={products} />
  );
  let tree = component.toJSON();

  // first click
  //console.log(">>>>>>", tree.children[0].children[0].children[1].props);
  tree.children[0].children[0].children[1].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // second click
  tree.children[0].children[0].children[1].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
