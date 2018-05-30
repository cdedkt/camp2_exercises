// App.test.js  avec Snapshot
import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';


test('App should contain a input', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  //console.log("tree=", tree);
  expect(tree).toMatchSnapshot();
});

test('App should have a clikable form', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();

  //console.log(">>>>>>", tree.children[0].children[0]);
  tree.children[0].children[0].props.onSubmit({preventDefault: ()=>{}});
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
